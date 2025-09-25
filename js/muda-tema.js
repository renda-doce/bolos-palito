document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='theme']");
  const body = document.body;

  radios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      // Remove classes antigas de tema
      body.classList.remove("theme-blue", "theme-green", "theme-red", "theme-gold","theme-purple", "theme-pink", "theme-teal", "theme-gray");

      // Adiciona a nova
      const selectedTheme = `theme-${e.target.value}`;
      body.classList.add(selectedTheme);
    });
  });
});
