let msg = "hello World";

interface User {
  name: string;
  id: number;
}

class UserAccount {
  id: number;
  name: string;
  constructor(un: string, id: number) {
    this.name = un;
    this.id = id;
  }
}
const user: User = new UserAccount("neriel", 770);

function deleteUser(u: User) {
  //...
}
function getUser(id): User {
  return { name: "mike", id: 4 };
}
type MyName = "yonathan" | "yehouda" | 10;

function bla(name: MyName): void {
  console.log(name);
}
bla(10);

type ArrStr = Array<string>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

const test: Backpack<number> = {
  add: () => {},
  get: () => {
    return 0;
  },
};
