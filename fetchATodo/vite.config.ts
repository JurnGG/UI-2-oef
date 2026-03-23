import {resolve} from "path";
import {defineConfig} from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                // Add any additional HTML entry points here if needed!
                about: resolve(import.meta.dirname, "site/about.html"),
            }
        }
    }
})