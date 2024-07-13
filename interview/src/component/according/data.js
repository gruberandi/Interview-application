  const data = [
    {
      "id": 1,
      "question": "What is a callback function?",
      "answer": "A callback function is a function that is passed as an argument to another function and is executed later, usually after the completion of the parent function."
    },
    {
      "id": 3,
      "question": "What is the difference between `let` & `var`?",
      "answer": "In JavaScript, let is block-scoped, meaning it is only accessible within the block it is declared in, while var is function-scoped and is accessible throughout the entire function where it is declared."
    },
    {
      "id": 4,
      "question": "Write an example where using the `var` declaration instead of the `let` could create a hard to debug code.",
      "answer": "for (var i = 0; i < 5; i++) {\n  setTimeout(function() {\n    console.log(i); // Output: 5, 5, 5, 5, 5 instead of 0, 1, 2, 3, 4\n  }, 100);\n}\n\nIn this case, the loop will finish executing before the setTimeout callbacks are triggered. Since var is function-scoped, by the time the callbacks are executed, the value of i will be 5 for all of them."
    },
    {
      "id": 5,
      "question": "Give a practical example where you would use the `reduce` function in javascript.",
      "answer": "const numbers = [10, 5, 3, 8, 2]; \nconst sum = numbers.reduce((accumulator, currentValue) => { \n  return accumulator + currentValue; \n}, 0); \n\nconsole.log(sum);"
    },
    {
      "id": 6,
      "question": "Give a practical example where you would use the `map` function in javascript.",
      "answer": "const celsiusTemperatures = [25, 30, 15, 20, 10];\nconst fahrenheitTemperatures = celsiusTemperatures.map((celsius) => {\n  return (celsius * 9/5) + 32;\n});\nconsole.log(fahrenheitTemperatures);"
    },
    {
      "id": 7,
      "question": "Give a practical example where you would use the `filter` function in javascript.",
      "answer": "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evenNumbers = numbers.filter((num) => num % 2 === 0);\n\nconsole.log(evenNumbers);\n\n//Incorrect\nconst names = [\"Alice\", \"Bob\", \"Charlie\", \"David\"];\nconst incorrectResult = names.filter((name) => {\n  if (name.length > 5) {\n    return name.toUpperCase();\n  }\n});"
    }
  ];
  export default data;