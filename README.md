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


### 3.Explain the difference between any, unknown, and never types in TypeScript.
###### any and unknown are the two escape ways that we use when we aren’t sure about what will be the type of value, whereas never is used when we are out of all data types, we are left with no values.
#### any 
##### when used, it simply turn off the type checker. We can assign anything to the variable which is marked any type
```ts
let value: any = "Hello";
value = 42;
value.toUpperCase(); // ✅ No error, even if value is a number
```


#### unknown 
###### When we start our journey in typescript then it is very hard to specify types for everything we use and sometimes google search also fails or takes time
```ts
let value: unknown = "Hello";

// value.toUpperCase();  

if (typeof value === "string") {
  console.log(value.toUpperCase());  
}
```

#### never 
###### never can be considered as opposite to any type any says give me anything and never says give me nothing never is used when we have exhausted all possible value and we don’t have anything to assign.
```ts
function throwError(message: string): never {
  throw new Error(message);
}

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String");
  } else if (typeof value === "number") {
    console.log("Number");
  } else {
    // value is 'never' here  it's  an impossible case
  }
}
```
