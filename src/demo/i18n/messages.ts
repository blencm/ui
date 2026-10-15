import type { DemoGroup } from "../groups";
import type { Locale } from "./types";

export const messages = {
  en: {
    catalogSubtitle: "React UI library",
    searchPlaceholder: "Search components...",
    searchAria: "Search components",
    home: "Introduction",
    noMatches: "No matches.",
    openMenu: "Open menu",
    navigation: "Navigation",
    gettingStarted: "Getting started",
    componentsNav: "Components",
    loadingDemo: "Loading demo...",
    homeEyebrow: "Installable React UI",
    homeTitle: "Build interfaces with @blencm/ui",
    homeLead:
      "Accessible components on Radix UI and Tailwind CSS. Install the package, import a component, and start. Styles, tokens, and the reset ship with the library.",
    installTitle: "1. Install",
    installBody: "Add the package to your React app. React and React DOM are peer dependencies.",
    peersTitle: "Peer dependencies",
    usageTitle: "2. Import a component",
    usageBody:
      "Styles load automatically with the package. You do not import a CSS file.",
    darkTitle: "3. Dark mode",
    darkBody:
      "The theme follows the dark class on an ancestor, usually the html element. next-themes works if you set attribute=\"class\".",
    optionalCssTitle: "Optional CSS import",
    optionalCssBody:
      "If your bundler does not load CSS from the package entry, import the stylesheet once in your app root.",
    exploreTitle: "Components",
    exploreBody:
      "Use the sidebar to browse by type, or jump to a component from here.",
    demoPageHint: "Open the Code tab to copy the example and import it from",
    preview: "Preview",
    code: "Code",
    example: "Example",
    copy: "Copy",
    copied: "Copied",
    copyAria: "Copy code",
    copiedAria: "Code copied",
    variants: "Variants",
    sizes: "Sizes",
    save: "Save",
    language: "Language",
    themeLight: "Use light theme",
    themeDark: "Use dark theme",
    themeToggle: "Toggle theme",
    groups: {
      buttons: "Buttons",
      "form-controls": "Form controls",
      overlays: "Overlays",
      navigation: "Navigation",
      feedback: "Feedback",
      "data-display": "Data display",
      layout: "Layout",
      forms: "Forms",
      composites: "Composites",
    } satisfies Record<DemoGroup, string>,
  },
} as const;

export type Messages = (typeof messages)[Locale];
