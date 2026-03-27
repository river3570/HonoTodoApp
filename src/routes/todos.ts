import { Hono } from "hono";
import db from "../db/database";
import type { Todo } from "../types/todo";
import { todo } from "node:test";

const todos = new Hono();

todos.get("/", (c) => {
  const allTodos = db
    .prepare("SELECT * FROM todos ORDER BY created_at DESC")
    .all() as Todo[];
  return (c as any).render("index", { todos: allTodos });
});

todos.post("/", async (c) => {
  const body = await c.req.parseBody();
  const title = body["title"] as string;

  if (!title || title.trim() === "") {
    return c.redirect("/");
  }

  db.prepare("INSERT INTO todos (title) VALUES (?)").run(title.trim());
  return c.redirect("/");
});

todos.post("/:id/toggle", (c) => {
  const id = c.req.param("id");
  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id) as
    | Todo
    | undefined;

  if (!todo) return c.notFound();

  db.prepare("UPDATE todos SET completed = ? WHERE id = ?").run(
    todo.completed ? 0 : 1,
    id,
  );

  return c.redirect("/");
});

todos.post("/:id/delete", (c) => {
  const id = c.req.param("id");
  db.prepare("DELETE FROM todos WHERE id = ?").run(id);

  return c.redirect("/");
});

export default todos;
