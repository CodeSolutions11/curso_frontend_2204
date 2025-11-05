import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const executeQuery = async (query, params = []) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(query, params);
    await connection.end();
    return results;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export const getTasks = async () => {
  const query = "SELECT * FROM task ORDER BY create_at DESC";
  return await executeQuery(query);
};
