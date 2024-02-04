const emailInput = document.getElementById("emailInput");
const resultElement = document.getElementById("result");

emailInput.addEventListener("input", validateEmail);

let ab = new MachineBuilder();
let dfa = new DFA(
  ab.alphabet,
  ab.states[0],
  ab.states[0],
  ab.transitions,
  ab.states
);

function validateEmail() {
  const email = emailInput.value;
  const validationResult = dfa.validateString(email);

  if (validationResult.isValid) {
    validEmail(email);
  } else {
    const invalidChar = validationResult.invalidChar;
    const lastValidTransitionLabel = validationResult.lastValidTransitionLabel;

    console.log("Last Valid Transition Label:", lastValidTransitionLabel);

    let INVALID_EMAIL_STRING = ""; // Declare the variable

    if (invalidChar != null) {
      INVALID_EMAIL_STRING = `Invalid character: ${invalidChar}`;
    } else if (lastValidTransitionLabel !== "") {
      const expectedChar = getExpectedCharacter(lastValidTransitionLabel);
      INVALID_EMAIL_STRING = `Expected character: ${expectedChar}`;
    } else {
      INVALID_EMAIL_STRING = `Invalid Email`;
    }

    invalidEmail(INVALID_EMAIL_STRING);
  }

  if (email.length === 0) {
    resultElement.style.color = ""; // Reset color
    resultElement.textContent = ""; // Clear content
    resultElement.classList.remove("invalid", "valid");
  }

  function getExpectedCharacter(lastValidTransitionLabel) {
    // Implement logic to determine the expected character based on the transition label
    switch (lastValidTransitionLabel) {
      case "transition12":
        return "a-z, A-Z, 0-9, special characters";
      case "transition22":
        return "@";
      case "transition23":
        return "a-z, A-Z";
      case "transition34":
        return "'.'";
      case "transition44":
        return "'.'";
      case "transition45":
        return "a-z, A-Z";
      case "transition56":
        return "a-z, A-Z";
      case "transition66":
        return "a-z, A-Z";
      default:
        console.log("Unknown transition label:", lastValidTransitionLabel);
        return " ";
    }
  }

  function invalidEmail(errorMessage) {
    resultElement.innerHTML = errorMessage;
    resultElement.classList.remove("valid");
    resultElement.classList.add("invalid");
    resultElement.style.display = "block";
  }

  function validEmail(email) {
    resultElement.innerHTML = `Valid Email: ${email}`;
    resultElement.classList.remove("invalid");
    resultElement.classList.add("valid");
    resultElement.style.display = "block";
  }

}
