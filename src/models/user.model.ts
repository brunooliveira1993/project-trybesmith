import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TUser } from '../types';
import connection from './connection';

const insertUser = async (user: TUser): Promise<TUser> => {
  const { username, vocation, level, password } = user;
  const [inserted] = await connection.execute<ResultSetHeader>(
    `INSERT INTO 
  Trybesmith.users (username, vocation, level, password) VALUES (?,?)`,
    [username, vocation, level, password],
  );
  const { insertId } = inserted;
  return { id: insertId, ...user };
};

const getByEmail = async (username: string): Promise<TUser | undefined> => {
  const [rows] = await connection.execute<RowDataPacket[] &
  TUser[]>('SELECT * FROM Trybesmith.users WHERE username = ?', [username]);
  return rows[0];
};

export default {
  insertUser,
  getByEmail,
};