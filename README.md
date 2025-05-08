### 1.What are some differences between interfaces and types in TypeScript?

###### In TypeScript, interface and type are two powerful tools used to define the structure and type of data — especially for objects, functions, arrays, and more. Both help add strong typing to your code, but they have different capabilities and use cases.


| Feature       | interface                          | type |
|---------------|-----------------------------------|-------|
| Purpose       | Describes the shape of an object or a class  | Defines any kind of type (object, union, primitive)|
| Extensibility | Can be extended using extends                | Can be combined using & (intersection) |
| Redeclaration |You can redeclare and it merges               | Cannot redeclare the same type name (throws an error) |
| Use Cases     | Best for defining object/class structures    |Better for complex types, unions, intersections |
|Readability    | 	More semantic for objects                  | More flexible, especially with unions and primitives |


 
## 📘 Example with interface:

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "John",
  age: 30,
  role: "superadmin"
};
```
## 📘 Example with type:
```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive" | "banned";

type Admin = User & {
  role: string;
};
```


### 2. What is the use of the keyof keyword in TypeScript? Provide an example?
###### The keyof keyword in TypeScript is used to extract the keys of an object type as a union of string literal types It allows you to get a type that represents all property names of another type.Enforce type safety when working with object keys (e.g., for dynamic access)

## 📘 Example:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;  // "name" | "age" | "email"
```
## 📘 Use Case keyof:
```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "Alice",
  age: 28,
  email: "alice@example.com"
};

const email = getValue(user, "email");   
const age = getValue(user, "age");       
```
