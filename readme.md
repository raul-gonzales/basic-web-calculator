# Basic Online Calculator
This project is a simple web calculator that uses all of the skills and techniques learned from the TOP foundations course. Basic functionalities of a calculator will be implemented, along with a simple graphical user interface.

### Tasks
##### Functionality
- [x] Functions for basic math operators
  - [x] Add
  - [x] Subtract
  - [x] Multiply
  - [x] Divide
- [x] Perform Unit Test as functions are created
- [ ] Track & Store operands for updating display
  
##### GUI
- [x] Buttons for digits and operators (0-9,+,-,*,/,=)
- [x] Button to clear numbers/operator (c)
- [ ] Display for operands

The *node_modules* folder was not included to avoid slow commits. To run the operators unit test files, you must have the *node_modules* file which can be obtained by going to terminal of root directory and entering the command
```mpm i --save-dev jest```

Once the *node_modules* folder is installed locally, enter the command ```npm test base_functions.test.js``` to run the unit test.

