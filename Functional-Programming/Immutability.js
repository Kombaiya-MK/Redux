import { Map } from "immutable";
// Map = require("immutable");

let book = Map({ name: "Harry Potter" });

function isPublished(book) {
  return book.set("isPublished", true);
}

book = isPublished(book);
console.log(book.toJS());
