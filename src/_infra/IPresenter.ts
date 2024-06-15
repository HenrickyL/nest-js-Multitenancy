export interface IPresenter<T = object> {
  toJSON(): T;
}
