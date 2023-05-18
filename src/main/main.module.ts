import 'reflect-metadata'
import { container, instanceCachingFactory } from 'tsyringe'
import { IDependency } from './interfaces/dependency.interface'

export abstract class MainModule {
  static dependencies: IDependency[] = []
  static register (): void {
    MainModule.dependencies.forEach(dep => container.register(dep.token, dep.dependency))
    MainModule.dependencies = []
  }

  static configure (): void {}

  static addDependency (dep: IDependency): void {
    MainModule.dependencies.push(dep)
  }

  static get<T> (provider: string): T {
    return container.resolve(provider)
  }

  static useFactory<T> (Type: (new (...args) => T), tokens: string[]): any {
    return {
      useFactory: instanceCachingFactory(
        (c) => {
          const dependecies = tokens.map(token => c.resolve(token))
          return new Type(
            ...dependecies
          )
        }
      )
    }
  }

  static useValue (value: any): any {
    return {
      useValue: value
    }
  }
}
