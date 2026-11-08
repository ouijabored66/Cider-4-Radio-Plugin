<script setup lang="ts">
import { computed, ref } from "vue";
import { searchStations, type Source, type Station } from "../radio";
import { current, diagnostics, play, setVolume, status, stop, volume } from "../player";

const query = ref("");
const stations = ref<Station[]>([]);
const failed = ref<Source[]>([]);
const searching = ref(false);
const searched = ref(false);

const statusText = computed(
  () =>
    ({
      stopped: "Stopped",
      connecting: "Connecting…",
      playing: "Playing",
      failed: "This station wouldn't play. Try another one.",
    })[status.value]
);

async function search() {
  const text = query.value.trim();
  if (!text) return;
  searching.value = true;
  const result = await searchStations(text);
  stations.value = result.stations;
  failed.value = result.failed;
  searching.value = false;
  searched.value = true;
}
</script>

<template>
  <div class="q-pa-lg radio-page">
    <h1 class="apple-heading">Radio</h1>

    <form class="radio-search" @submit.prevent="search">
      <input v-model="query" type="search" placeholder="Search stations" aria-label="Search stations" />
      <button class="c-btn" type="submit" :disabled="searching">
        {{ searching ? "Searching…" : "Search" }}
      </button>
    </form>

    <section v-if="current" class="radio-now" aria-live="polite">
      <div class="radio-now-text">
        <strong>{{ current.name }}</strong>
        <span>{{ statusText }}</span>
        <small class="radio-diagnostics">{{ diagnostics }}</small>
      </div>
      <label>
        Volume
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          :value="volume"
          @input="setVolume(Number(($event.target as HTMLInputElement).value))"
        />
      </label>
      <button class="c-btn" type="button" @click="stop">Stop</button>
    </section>

    <p v-for="source in failed" :key="source" class="radio-note">
      {{ source }} couldn't be reached, so its stations aren't shown.
    </p>
    <p v-if="searched && !stations.length && !searching" class="radio-note">No stations found.</p>

    <ul class="radio-list">
      <li v-for="station in stations" :key="station.id">
        <button type="button" :class="{ active: current?.id === station.id }" @click="play(station)">
          <img v-if="station.image" :src="station.image" alt="" loading="lazy" />
          <span class="radio-name">{{ station.name }}</span>
          <span class="radio-detail">{{ station.detail }}</span>
          <span class="radio-source">{{ station.source }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.radio-search { display: flex; gap: 8px; margin-bottom: 16px; max-width: 560px; }
.radio-search input {
  flex: 1; min-width: 0; padding: 8px 12px; border-radius: 8px;
  border: 1px solid rgba(128, 128, 128, 0.4); background: transparent; color: inherit; font: inherit;
}
.radio-now {
  display: flex; flex-wrap: wrap; align-items: center; gap: 16px; padding: 12px 16px;
  margin-bottom: 16px; border-radius: 10px; background: rgba(128, 128, 128, 0.15);
}
.radio-now-text { display: flex; flex-direction: column; flex: 1; min-width: 180px; }
.radio-diagnostics { opacity: 0.7; font-size: 0.75em; }
.radio-note { opacity: 0.75; margin: 4px 0; }
.radio-list { list-style: none; margin: 0; padding: 0; }
.radio-list button {
  display: grid; grid-template-columns: 40px 1fr auto; grid-template-rows: auto auto;
  column-gap: 12px; width: 100%; padding: 8px; text-align: left; border: 0; border-radius: 8px;
  background: transparent; color: inherit; font: inherit; cursor: pointer;
}
.radio-list button:hover, .radio-list button.active { background: rgba(128, 128, 128, 0.15); }
.radio-list img { grid-row: 1 / 3; width: 40px; height: 40px; object-fit: cover; border-radius: 6px; }
.radio-name { grid-column: 2; font-weight: 600; }
.radio-detail { grid-column: 2; opacity: 0.7; font-size: 0.85em; }
.radio-source { grid-column: 3; grid-row: 1 / 3; align-self: center; opacity: 0.6; font-size: 0.8em; }
</style>
