export interface User<ID = unknown> {
  id?: ID;
  name: string;
  email: string;
}
