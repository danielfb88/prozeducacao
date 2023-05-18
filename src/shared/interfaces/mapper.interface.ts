export interface Mapper<T, K = T> {
  map: (value: T) => K
}
