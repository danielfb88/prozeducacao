import { ILogMessage } from './log-message.interface'

export interface ILoggerService {
  error: (
    message: string | ILogMessage,
    context: string,
    trace?: string,
    meta?: any,
  ) => void
  info: (message: string | ILogMessage, context: string, meta?: any) => void
  warn: (message: string | ILogMessage, context: string, meta?: any) => void
  debug: (message: string | ILogMessage, context: string, meta?: any) => void
  verbose: (message: string | ILogMessage, context: string, meta?: any) => void
}
