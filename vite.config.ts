import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "/KRB-final/" — o site será publicado em
// https://usuario.github.io/KRB-final/ (nome do repositório: KRB-final).
export default defineConfig({
  base: "/KRB-final/",
  plugins: [react(), tailwindcss()],
});
