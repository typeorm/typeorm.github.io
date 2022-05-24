{
  const LS_KEY = "use-dark-mode",
    setLsValue = (enabled) =>
      window.localStorage.setItem(LS_KEY, enabled ? "1" : "0");

  let useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedPreference = window.localStorage.getItem(LS_KEY);
  if (storedPreference === null) {
    setLsValue(useDarkMode);
  } else {
    useDarkMode = storedPreference === "1";
  }

  const darkStylesheets = Array.from(
    document.head.querySelectorAll("link[data-dark-stylesheet]")
  );
  const setDarkMode = (enabled) => {
    useDarkMode = enabled;
    setLsValue(enabled);
    for (const stylesheet of darkStylesheets) {
      enabled
        ? stylesheet.setAttribute("rel", "stylesheet")
        : stylesheet.removeAttribute("rel");
    }
  };
  Object.defineProperty(window, "_darkMode", {
    get() {
      return useDarkMode;
    },
    set: setDarkMode,
  });

  setDarkMode(useDarkMode);
}
