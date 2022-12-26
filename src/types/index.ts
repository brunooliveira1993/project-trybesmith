export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUser = {
  id?: number,
  username: string,
  vocation?: string,
  level?: number,
  password?: string
};

export type TLogin = {
  id?: number,
  username: string,
  password: string
};

export type TResult = {
  type?: string,
  message?: string
};