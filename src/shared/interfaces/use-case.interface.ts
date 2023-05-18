/* eslint-disable @typescript-eslint/no-invalid-void-type */
export interface IUseCase<T, K = void | any> {
  execute: (...args: T[]) => K
}
