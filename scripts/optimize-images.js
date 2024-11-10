import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ruta al directorio de las imágenes antes del build
const baseFolder = path.join(__dirname, '../public/assets/images/post')

async function processImagesInFolder(folderPath) {
  const files = await fs.readdir(folderPath)

  for (const file of files) {
    const filePath = path.join(folderPath, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      await processImagesInFolder(filePath) // Procesa subcarpetas recursivamente
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      // Sobrescribe la imagen original ajustando solo el ancho a 500 px
      await sharp(filePath).resize({ width: 500 }).toFile(filePath) // Mantiene la misma extensión y nombre de archivo

      console.log(`Redimensionado: ${filePath}`)
    }
  }
}

async function optimizeImages() {
  try {
    await processImagesInFolder(baseFolder)
    console.log('Redimensionamiento de imágenes completado.')
  } catch (error) {
    console.error('Error al redimensionar las imágenes:', error)
  }
}

optimizeImages()
