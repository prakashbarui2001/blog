import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "blog",
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});
