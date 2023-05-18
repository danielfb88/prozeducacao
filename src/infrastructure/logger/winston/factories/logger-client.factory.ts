import winston, { format, transports } from 'winston'
import { IS_DEV, LOGGER_LEVEL, PROJECT_NAME } from '@/main/config'
import { commonFormatter } from '../formatters/common.formatter'
import { colorizeFormatter } from '../formatters/colorize.formatter'

export const getLoggerClient = (): winston.Logger => {
  try {
    return winston.createLogger({
      level: LOGGER_LEVEL,
      format: format.combine(
        format.json(),
        IS_DEV
          ? format.printf(colorizeFormatter(PROJECT_NAME))
          : format.printf(commonFormatter(PROJECT_NAME))
      ),
      transports: [
        new transports.Console({})
      ]
    })
  } catch (e) {
    throw new Error(e.error)
  }
}
