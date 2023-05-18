export interface IInputErrorMessage {
  property: string
  constraints: {
    [type: string]: string
  }
}
