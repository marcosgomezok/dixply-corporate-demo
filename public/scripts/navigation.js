const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const toggleText = document.querySelector(".menu-toggle-text");

if (toggle && navigation && toggleText) {
  const closeLabel = toggle.dataset.closeLabel;
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggleText.textContent = isOpen ? toggleText.dataset.openLabel ?? "" : closeLabel ?? "";
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      toggleText.textContent = toggleText.dataset.openLabel ?? "";
      navigation.classList.remove("is-open");
    }
  });
}
