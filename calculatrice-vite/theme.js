const theme1 = {
  /*background*/

  "--screen-bg": "hsl(224, 36%, 15%)",
  "--main-bg": "hsl(222, 26%, 31%)",
  "--keypad-bg": "hsl(223, 31%, 20%)",
  /*text*/
  "--text-blue": "hsl(221, 14%, 31%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screen-text": "white",
  /*keys*/

  "--keys-func-bg": "hsl(225, 21%, 49%)",
  "--keys-func-hover": "hsl(255, 51%, 76%)",
  "--keys-func-shadow": "hsl(224, 28%, 35%)",

  "--key-equal-bg": "hsl(6, 63%, 50%)",
  "--key-equal-shadow": "hsl(6, 70%, 34%)",
  "--key-equal-hover": "hsl(6, 93%, 67%)",

  "--keys-bg": "hsl(30, 25%, 89%)",
  "--keys-hover": "white",
  "--keys-shadow": "hsl(28, 16%, 65%)",
};
const theme2 = {
  /*background*/

  "--screen-bg": "hsl(0, 0%, 93%)",
  "--main-bg": "hsl(0, 0%, 90%)",
  "--keypad-bg": "hsl(0, 5%, 81%)",
  /*text*/
  "--text-blue": "hsl(60, 10%, 19%)",
  "--text-white": "hsl(60, 100%, 100%)",
  "--screen-text": "black",

  /*keys*/

  "--keys-func-bg": "hsl(185, 42%, 37%)",
  "--keys-func-hover": "red",
  "--keys-func-shadow": "hsl(185, 58%, 25%)",

  "--key-equal-bg": "hsl(25, 98%, 40%)",
  "--key-equal-shadow": "hsl(25, 99%, 27%)",
  "--key-equal-hover": "hsl(6, 93%, 67%)",

  "--keys-bg": "hsl(45, 7%, 89%)",
  "--keys-hover": "white",
  "--keys-shadow": "hsl(35, 11%, 61%)",
};

const theme3 = {
  /*background*/

  "--screen-bg": "hsl(268, 71%, 12%)",
  "--main-bg": "hsl(268, 75%, 9%)",
  "--keypad-bg": "hsl(268, 71%, 12%)",
  /*text*/
  "--text-blue": "hsl(52, 100%, 62%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screen-text": "hsl(52, 100%, 62%)",

  /*keys*/

  "--keys-func-bg": "hsl(268, 47%, 21%)",
  "--keys-func-hover": "red",
  "--keys-func-shadow": "hsl(290, 70%, 36%)",

  "--key-equal-bg": "hsl(176, 100%, 44%)",
  "--key-equal-shadow": "hsl(177, 92%, 70%)",
  "--key-equal-hover": "hsl(6, 93%, 67%)",

  "--keys-bg": "hsl(281, 89%, 26%)",
  "--keys-hover": "hsl(268, 75%, 9%)",
  "--keys-shadow": "hsl(285, 91%, 52%)",
};

var buttons = document.querySelectorAll(".toggle");
var lastActive = 0;
export function setupThemeButtons() {
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
      buttons[lastActive].classList.remove("active");
      button.classList.add("active");
      lastActive = i;

      applyTheme(i);
    });
  }
}

const themes = [theme1, theme2, theme3];

export function applyTheme(index) {
  const rootEl = document.querySelector(":root");

  const selectedTheme = themes[index];

  for (let key in selectedTheme) {
    rootEl.style.setProperty(key, selectedTheme[key]);
  }
}
applyTheme(0);
