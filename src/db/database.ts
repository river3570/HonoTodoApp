import Database = require("better-sqlite3");

const db = new Database("todos.db");

db.exec(`
	CREATE TABLE IF NOT EXISTS todos (
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		title      TEXT NOT NULL,
		completed  INTEGER NOT NULL DEFAULT 0,
		created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  )
`);

export default db;
