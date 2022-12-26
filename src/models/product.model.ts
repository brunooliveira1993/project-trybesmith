import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TProduct } from '../types';
import connection from './connection';

// RowDataPacket => SELECT
// ResulotSetHeader => INSERT, DELETE, UPDATE

const getAll = async (): Promise<TProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & 
  TProduct[]>('SELECT * FROM Trybesmith.products');
  return rows as TProduct[];
};

const insert = async (product: TProduct): Promise<TProduct> => {
  const { name, amount } = product;
  const [inserted] = await connection.execute<ResultSetHeader>(`INSERT INTO 
  Trybesmith.products (name, amount) VALUES (?,?)`, [name, amount]);
  const { insertId } = inserted;
  return { id: insertId, ...product };
};

export default {
  getAll,
  insert,
};