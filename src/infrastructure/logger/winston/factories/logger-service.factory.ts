import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { LoggerService } from '../services/logger.service'
import { getLoggerClient } from './logger-client.factory'

export const getLoggerService = (): ILoggerService =>
  new LoggerService(getLoggerClient())
