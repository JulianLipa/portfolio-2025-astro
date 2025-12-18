// astro.config.mjs

import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// **¡IMPORTANTE!** Reemplaza 'e6bedad4a2ce.ngrok-free.app' con el dominio **actual** de ngrok
// O mejor aún, usa una variable de entorno como se explica abajo.

export default defineConfig({
  // ... otras configuraciones de Astro ...

  vite: {
    server: {
      allowedHosts: ["*.ngrok-free.app"],
      // **AÑADE ESTA LÍNEA:**
      hmr: {
        host: "809511948dc2.ngrok-free.app", // Usa tu dominio actual de ngrok aquí
        protocol: "wss",
      },
    },
  },

  integrations: [react()],
});
