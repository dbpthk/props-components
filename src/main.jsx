import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./assets/components/ThemeToggler.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
