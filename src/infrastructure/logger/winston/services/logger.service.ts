import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import winston from 'winston'

export class LoggerService implements ILoggerService {
  constructor (private readonly logger: winston.Logger) {}

  error (
    message: string,
    context: string,
    meta?: any
  ): void {
    this.logger.error(message, [context, meta])
  }

  info (message: string, context: string, meta?: any): void {
    this.logger.info(message, [context, meta])
  }

  warn (message: string, context: string, meta?: any): void {
    this.logger.warn(message, [context, meta])
  }

  debug (message: string, context: string, meta?: any): void {
    this.logger.debug(message, [context, meta])
  }

  verbose (message: string, context: string, meta?: any): void {
    this.logger.verbose(message, [context, meta])
  }
}
