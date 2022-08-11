const user = { name: "Nick", id: 7 };
const user2 = { name: "Juan", id: 9 };
const user3 = { name: "Alba", id: 3 };

const book1 = {
  title: "The Catcher in the Rye",
  author: "J.D Salinger",
  isbn: "0316769487",
  category: "Classic Literature",
};
const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "0446310786",
  category: "Classic Literature",
};
const book3 = {
  title: "La sociedad de coste marginal cero",
  author: "Jeremy Rifkin",
  isbn: "9788449330513",
  category: "Economia",};
const book4 = {
  title: "Siddhartha",
  author: " Hermann Hesse",
  isbn: "9788499899855",
  category: "Narrativa de bolsillo",
};
const book5 = {
  title: "Elogio a la sombra",
  author: "Junichiro Tanizaki",
  isbn: "9788478442584",
  category: "Classic Literature",
};

user.books = [book1, book2];
user2.books = [book3];
user3.books = [book4, book5

const library = [user, user2, user3];

for (let i = 0; i < library.length; i++) {
  console.log(`\nEl usuari@ ${library[i].name} tiene los siguientes libros:`);
  for (let j = 0; j < library[i].books.length; j++) {
    console.log(
      `   - libro ${j + 1}: "${library[i].books[j].title}", ${
        library[i].books[j].author
      }`
    );
  }
  console.log(`------------------------------------------`);
}


