// class User {
//   readonly #name: string;
//   readonly #age: number;

//   constructor(name: string, age: number) {
//     if (name === "") {
//       throw new Error("名前は空にできません");
//     }

//     this.#name = name;
//     this.#age = age;
//   }

//   getMessage(message: string): string {
//     return `${this.#name} (${this.#age})「${message}」`;
//   }
// }

// type User {
//   name: string
//   age: number
// }

const createUser = (name: string, age: number) => {
  if (name === "") {
    throw new Error("名前は空にできません");
  }

  const getMessage = (message: string): string => {
    return `${name} (${age})「${message}」`;
  }

  const getAge = (): number => {
    return age;
  }

  return {
    getMessage
    , getAge
  }
}

// class User {
//   readonly #name: string;
//   readonly #age: number;

//   constructor(name: string, age: number) {
//     if (name === "") {
//       throw new Error("名前は空にできません");
//     }

//     this.#name = name;
//     this.#age = age;
//   }

//   getMessage(message: string): string {
//     return `${this.#name} (${this.#age})「${message}」`;
//   }
// }


// const uhyo = new User("uhyo", 26);
// console.log(uhyo.getMessage("こんにちは"));

// const getMessage = createUser("uhyo", 26)
// console.log(getMessage("こんにちは"));

const user = createUser("uhyo", 26)
console.log(user.getMessage("こんにちは"));
console.log(user.getAge());
