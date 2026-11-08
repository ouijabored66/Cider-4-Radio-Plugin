import { ref } from "vue";
import { AppleMusic, useCider } from "@ciderapp/pluginkit";
import { resolveStream, type Station } from "./radio";

export type PlayerStatus = "stopped" | "connecting" | "playing" | "failed";

export const current = ref<Station | null>(null);
export const status = ref<PlayerStatus>("stopped");
export const volume = ref(0.8);
/** Live player readout shown on the Radio page. */
export const diagnostics = ref("");

const audio = new Audio();
audio.preload = "none";
audio.volume = volume.value;

audio.addEventListener("playing", () => (status.value = "playing"));
audio.addEventListener("waiting", () => {
  if (current.value) status.value = "connecting";
});
audio.addEventListener("error", () => {
  if (current.value) status.value = "failed";
});

let sinkNote = "default";

/** Use the output device chosen in Cider's settings, as Cider does for music. */
async function useCiderOutputDevice() {
  try {
    const device = (useCider() as any).config.getRef()?.audio?.deviceOutput;
    const element = audio as any;
    if (!device || typeof element.setSinkId !== "function") {
      sinkNote = device ? "unsupported" : "default";
      return;
    }
    await element.setSinkId(device);
    sinkNote = device === "default" ? "default" : device.slice(0, 8);
  } catch (error) {
    console.warn("[radio] could not set output device", error);
    sinkNote = `failed: ${(error as Error)?.name ?? "error"}`;
  }
}

setInterval(() => {
  if (!current.value) {
    diagnostics.value = "";
    return;
  }
  diagnostics.value = [
    `time ${audio.currentTime.toFixed(1)}s`,
    `paused ${audio.paused}`,
    `ready ${audio.readyState}`,
    `network ${audio.networkState}`,
    `volume ${audio.volume.toFixed(2)}`,
    `muted ${audio.muted}`,
    `output ${sinkNote}`,
    `error ${audio.error?.code ?? "none"}`,
  ].join(" | ");
}, 1000);

function pauseAppleMusic() {
  try {
    (AppleMusic as any)?.pause?.();
  } catch (error) {
    console.warn("[radio] could not pause Apple Music", error);
  }
}

export async function play(station: Station) {
  current.value = station;
  status.value = "connecting";
  pauseAppleMusic();
  try {
    const url = await resolveStream(station);
    if (current.value?.id !== station.id) return;
    await useCiderOutputDevice();
    audio.muted = false;
    audio.src = url;
    await audio.play();
  } catch (error) {
    console.warn("[radio] playback failed", error);
    if (current.value?.id === station.id) status.value = "failed";
  }
}

export function stop() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  current.value = null;
  status.value = "stopped";
}

export function setVolume(value: number) {
  volume.value = value;
  audio.volume = value;
}

/** Hands audio back to Apple Music when the user starts a song. */
export function stopWhenMusicStarts() {
  const music = AppleMusic as any;
  music?.addEventListener?.("playbackStateDidChange", (event: any) => {
    if (event?.state === 2 && current.value) stop();
  });
}
