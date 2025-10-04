import { defineConfig } from "vite"; // ✅ importa o defineConfig corretamente
import react from "@vitejs/plugin-react-swc"; // ✅ plugin do React com SWC
import path from "path"; // ✅ necessário pro alias funcionar

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MenteImpertubavel/", // 👈 igual ao nome do repositório no GitHub
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
