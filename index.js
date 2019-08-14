// # JavaScript_SwitchCase_cw

// ### Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number to print.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 2,
// 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
let user_choice;

while(user_choice !== "6") {
  user_choice = prompt(
    "Enter a number 1-5 or 6 to quit"
  );
  switch (user_choice) {
    case "6":
      console.log("Later");
    case "1":
      alert(1);
      break;
    case "2":
      alert(2);
      break;
    case "3":
      alert(3);
      break;
    case "4":
      alert(4);
      break;
    case "5":
      alert(5);
      break;
  }
}
// ### Problem 2:
// Put the start of your program in a main function.
// Ask the user to enter a 3 digit binary number.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 10,
// 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.
let user_digit;

while (user_digit !== "6") {
  user_digit = prompt(
    "Enter a binary number 1,10,11,100,101 or '6' to quit"
    );
  switch (user_digit) {
    case "6":
      console.log("Out this ***!");
      break;
    case "1":
      alert(1);
      break;
    case "10":
      alert(2);
      break;
    case "11":
      alert(3);
      break;
    case "100":
      alert(4);
      break;
    case "101":
      alert(5);
      break;
  }
}
