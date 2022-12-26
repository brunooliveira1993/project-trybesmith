import { RowDataPacket } from 'mysql2';
import { TOrder } from '../types';
import connection from './connection';

const getAll = async (): Promise<TOrder[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & 
  TOrder[]>(`SELECT ord.id, user_id as userId, JSON_ARRAYAGG(pro.id) AS productsIds
  FROM Trybesmith.orders AS ord
  INNER JOIN Trybesmith.products AS pro 
  ON ord.id = pro.order_id 
  GROUP BY ord.id`);
  return rows as TOrder[];
};

export default {
  getAll,
};