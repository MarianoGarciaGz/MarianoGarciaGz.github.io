// scripts/update-sitemap.js
import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configura las URLs y sus prioridades
const priorities = {
  'https://marianogarciagz.github.io': '1.0',
  'https://marianogarciagz.github.io/contact': '0.8',
  'https://marianogarciagz.github.io/blog': '0.6',
}

// Prioridad predeterminada para las entradas de blog
const blogPriority = '0.5'

// Lee el sitemap generado
const sitemapPath = path.join(__dirname, '../dist/sitemap-0.xml')
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')

// Parsear el contenido del sitemap
const dom = new JSDOM(sitemapContent, { contentType: 'text/xml' })
const document = dom.window.document

// Ajusta las prioridades
const urls = document.querySelectorAll('url')
urls.forEach((url) => {
  const loc = url.querySelector('loc').textContent
  let priority = url.querySelector('priority')

  // Si no existe el elemento <priority>, crearlo sin espacio de nombres
  if (!priority) {
    priority = document.createElementNS(null, 'priority') // Crear <priority> sin xmlns=""
    url.appendChild(priority)
  }

  // Asigna prioridad según la configuración
  if (priorities[loc]) {
    priority.textContent = priorities[loc]
  } else {
    // Asigna prioridad predeterminada para los blogs
    priority.textContent = blogPriority
  }
})

// Guarda el archivo modificado
fs.writeFileSync(sitemapPath, dom.serialize())

console.log('Sitemap actualizado sitemap.xml en /dist/')
