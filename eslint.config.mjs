import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import pluginCypress from 'eslint-plugin-cypress'
import pluginChaiFriendly from 'eslint-plugin-chai-friendly'

export default defineConfig([
  pluginCypress.configs.recommended,
  pluginChaiFriendly.configs.recommendedFlat,
  {
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
    },
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    
  },

])

