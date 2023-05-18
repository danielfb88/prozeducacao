/* eslint-disable @typescript-eslint/restrict-plus-operands */
import * as clc from 'cli-color'
import safeStringify from 'fast-safe-stringify'
import { COLOR_SCHEME } from '../logger.constants'

export const getColor = (level): any => clc.default[COLOR_SCHEME[level]]

export const colorizeFormatter =
  (appName) =>
    ({ level, message, ...meta }) => {
      const color = getColor(level)

      return (
      `${
        `${color(`[${appName}]`)} ${clc.default.yellow(level.charAt(0).toUpperCase() + level.slice(1))}\t`
      }${`${clc.default.yellow(`[${meta[0]}]`)} `}${color(message)} ${meta[1] ? ` - ${safeStringify(meta[1])}` : ''}`
      )
    }
