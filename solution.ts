//todo problem -01
type FormatValueType = string | number | boolean;

function formatValue(value: FormatValueType) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}
// console.log(formatValue("sefat"));
// console.log(formatValue(20));
// console.log(formatValue(false));

//todo problem -02

const getLength = (value: string | Array<unknown>): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

// console.log(getLength("typescript is awesome"));
// console.log(getLength([10, 20, 30, 40, 50, 60]));

//todo problem -03
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

// todo problem -04

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4.0);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

// todo problem -05
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
  { id: 4, name: "Sabbir", email: "sabbir@example.com", isActive: false },
  { id: 5, name: "Sakib", email: "sakib@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

// todo problem -06
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// todo problem -07

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];

  // helper function to check duplicates
  function exists(value: number | string): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  }

  // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  // loop through arr2
  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
