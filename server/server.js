import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import ToDo from "./mongoose/todo";
import schema from "./graphql/Schema/Schema";
const app = express();

mongoose.connect("mongodb://localhost:27017/local");
var db = mongoose.connection;
db.on("error", () => {
  console.log("---FAILED to connect to mongoose");
});
db.once("open", () => {
  console.log("+++Connected to mongoose");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
// app.get("/api", (req, res) => {
//   // Insert into TodoList Collection
//   var todoItem = new ToDo({
//     itemId: 1,
//     item: "vipin",
//     completed: false
//   });
//   todoItem.save((err, result) => {
//     if (err) {
//       console.log("---TodoItem save failed " + err);
//     }
//     console.log("+++TodoItem saved successfully " + todoItem.item);
//   });
// });

export default app;
