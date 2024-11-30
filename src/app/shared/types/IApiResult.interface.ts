export interface IApiResult<T> {
  "count": number;
  "next": string;
  "previous": string;
  "results": T[];
}
