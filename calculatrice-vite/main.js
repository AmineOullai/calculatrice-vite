import "./style.css";
import { setupThemeButtons } from "./theme.js";
import { applyTheme } from "./theme.js";
import { activeButton } from "./LogiqueCalculator";
import { setupKeyboard } from "./LogiqueCalculator";
setupThemeButtons();
applyTheme(0);
activeButton();
setupKeyboard();
