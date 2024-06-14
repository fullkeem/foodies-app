import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //SQL 인젝션으로부터 지키기 위해 구문에 동적인 값("?")을 넣는다.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
