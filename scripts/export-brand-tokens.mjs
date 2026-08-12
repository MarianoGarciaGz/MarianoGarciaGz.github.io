#!/usr/bin/env node
// Exporta los tokens de marca reales del sitio (src/sass/_variables.scss)
// a marianogarciagz-posts/brands/marianogarciagz/tokens.css, en el formato
// --brand-* que Framekit espera (ver docs de Framekit / brand butzu).
//
// Uso: node scripts/export-brand-tokens.mjs

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const bridgePath = path.join(__dirname, "_tokens-bridge.scss");

const postsBrandDir = path.resolve(
  repoRoot,
  "../marianogarciagz-posts/brands/marianogarciagz",
);
const outputPath = path.join(postsBrandDir, "tokens.css");

try {
  readFileSync(path.join(repoRoot, "src/sass/_variables.scss"));
} catch {
  console.error("No se encontró src/sass/_variables.scss en este repo.");
  process.exit(1);
}

const compiled = execFileSync(
  "npx",
  ["--yes", "sass", "--quiet", bridgePath],
  { cwd: repoRoot, encoding: "utf8" },
);

const match = compiled.match(/:root\s*{[^}]*}/s);
if (!match) {
  console.error("No se encontró el bloque :root en la salida de sass.");
  process.exit(1);
}

const vars = Object.fromEntries(
  Array.from(match[0].matchAll(/--sync-([\w-]+):\s*([^;]+);/g)).map(
    ([, name, value]) => [name, value.trim()],
  ),
);

const css = `/**
 * Brand tokens — marianogarciagz
 *
 * GENERADO AUTOMÁTICAMENTE por MarianoGarciaGz.github.io/scripts/export-brand-tokens.mjs
 * Fuente de verdad: MarianoGarciaGz.github.io/src/sass/_variables.scss
 * Para actualizar: cambia el .scss del sitio y vuelve a correr, desde el
 * repo del sitio, node scripts/export-brand-tokens.mjs
 *
 * El post.html de Framekit los consume vía var(--brand-color-primary), etc.
 */
:root {
  /* --- Colores de marca --- */
  --brand-color-primary: ${vars.primary};
  --brand-color-secondary: ${vars.secondary};
  --brand-color-success: ${vars.success};
  --brand-color-warning: ${vars.warning};
  --brand-color-danger: ${vars.danger};

  --brand-color-bg: ${vars.white};
  --brand-color-fg: ${vars.black};
  --brand-color-muted: ${vars["gray-600"]};

  --brand-color-bg-dark: ${vars.black};
  --brand-color-fg-dark: ${vars.white};

  /* --- Tipografía --- */
  --brand-font-display: ${vars["headings-font-family"]};
  --brand-font-family: ${vars["font-family-sans-serif"]};

  /* --- Espaciado --- */
  --brand-spacing-4: 16px;
  --brand-spacing-8: 32px;
  --brand-spacing-16: 64px;
}
`;

mkdirSync(postsBrandDir, { recursive: true });
writeFileSync(outputPath, css);
console.log(`tokens.css exportado a ${path.relative(repoRoot, outputPath)}`);
