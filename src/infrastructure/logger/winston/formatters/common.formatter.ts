import safeStringify from 'fast-safe-stringify'

export const commonFormatter =
  (appName) =>
    ({ level, message, ...meta }) =>
    `${`${`[${appName}]`} ${
      level.charAt(0).toUpperCase()} ${level.slice(1)
    }\t`}${`${`[${meta[0]}]`} `}${message} ${meta[1] ? ` - ${safeStringify(meta[1])}` : ''}`
