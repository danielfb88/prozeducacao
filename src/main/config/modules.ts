import { lstatSync, readdirSync } from 'fs'
import path from 'path'
import { getLoggerService } from '@/infrastructure/logger/winston/factories/logger-service.factory'

const logger = getLoggerService()
const currentFileName = path.basename(__filename)

const capitalizeFirstLetter = (string): string =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`

const registerModule = async (layer: string, module: string): Promise<void> => {
  const imp = await import(module)
  const keys = Object.keys(imp)
  for (const key of keys) {
    logger.info(`[Module] Registering ${capitalizeFirstLetter(layer)} ${key}`, currentFileName)
    void await imp[key].configure()
    void imp[key].register()
  }
}

const dig = async (layer, current: string): Promise<void> => {
  for (const item of readdirSync(current)) {
    if (item.endsWith('.module.js')) {
      await registerModule(layer, path.join(current, item))
      continue
    }
    if (lstatSync(path.join(current, item)).isDirectory()) {
      await dig(layer, path.join(current, item))
    }
  }
}

export default async (layers = ['infrastructure', 'domain', 'presentation']): Promise<void> => {
  for (const layer of layers) {
    await dig(layer, path.join(__dirname, '../../', layer))
  }
}
