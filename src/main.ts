import { defineCustomElement } from "vue";
import { addMainMenuEntry, definePluginContext } from "@ciderapp/pluginkit";
import PluginConfig from "./plugin.config";
import RadioPage from "./pages/RadioPage.vue";
import { stop, stopWhenMusicStarts } from "./player";

export const CustomElements = {
  "page-radio": defineCustomElement(RadioPage, { shadowRoot: false }),
};

const { plugin, customElementName, goToPage } = definePluginContext({
  ...PluginConfig,
  CustomElements,
  setup() {
    for (const [key, value] of Object.entries(CustomElements)) {
      customElements.define(customElementName(key as keyof typeof CustomElements), value);
    }

    addMainMenuEntry({
      label: "Radio",
      onClick() {
        goToPage({ name: "page-radio" });
      },
    });

    addMainMenuEntry({
      label: "Stop Radio",
      onClick() {
        stop();
      },
    });

    stopWhenMusicStarts();
  },
});

export { customElementName, goToPage };
export default plugin;
