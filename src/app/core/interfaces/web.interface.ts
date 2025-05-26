export interface WebResponse<T> {
  status: string;
  message: string;
  data: T;
}
