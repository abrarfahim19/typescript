let phone: number = 123_456_789;
let user_name: string = "Abrar";
let total_user_choices: number[] = [1, 2, 3];
let user_choices: string[] = ["Machine Learning", "Mechatronics", "Developing"];

// Auto completion method for number and string array
total_user_choices.forEach((n) => n.toString);
user_choices.forEach((n) => n.length);

// Auto completion with TUPLE (Don't use more than two)
let tuple: [string, number] = [user_name, 123_456_789];
tuple[0].concat("Fahim");
tuple[1].toString;
// The method of string and number will pop up in code completion.

// Using Enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
const mySize: Size = Size.Medium;

// Optimezed Enum
const enum Sizes {
  Small = 1,
  Medium,
  Large,
}
const mySizes: Sizes = Sizes.Medium;

// Using Functions
function incomeTax(earning: number, taxYear: number = 2022): number {
  // let x = 3;
  if (earning > 50_000 && taxYear < 2022) return earning * 1.3;
  return earning * 1.2;
}

// Using object
let employee: { id: number; name: string; retire: (date: Date) => void } = {
  id: 0,
  name: "Abrar",
  retire: (date) => console.log(date),
};
