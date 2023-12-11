import { produce } from "immer";

let book = { title: "Harry Potter", address: {} };

function publish(book) {
  return produce(book, (updatedBook) => {
    (updatedBook.isPublished = true),
      (updatedBook.address.country = "UK"),
      (updatedBook.address.city = "Birmingham");
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
