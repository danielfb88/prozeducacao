export default interface IHandlerImplementation {
  [key: string]: (call: unknown, callback: unknown) => void
}
