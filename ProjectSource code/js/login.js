window.onload = init;

// The "onload" handler. Run after the page is fully loaded.
function init() {
   // Attach "onsubmit" handler
   document.getElementById("theForm").onsubmit = validateForm;
   // Attach "onclick" handler to "reset" button
   document.getElementById("reset").onclick = clearDisplay;
   // Set initial focus
   document.getElementById("name").focus();
}

/* The "onsubmit" handler to validate the input fields.
 * Most of the input validation functions take 2 arguments:
 * inputId or inputName: the "id" of the <input> element to be validated
 *   or "name" for checkboxes and radio buttons.
 * errorMsg: the error message to be displayed if validation fails.
 *   The message shall be displayed on an element with id of
 *   inputID+"Error" if it exists; otherwise via an alert().
 */
function validateForm() {
   return (isValidEmail("email", "Enter a valid email!")
        && isLengthMinMax("password", "Enter a valid password!", 6, 8));
}

// Retrun true if the input value is not empty
function isNotEmpty(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length != 0);  // boolean
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}

/* If "isValid" is true, print the errorMsg; else, reset to normal display.
 * The errorMsg shall be displayed on erroElement if it exists; 
 *   otherwise via an alert().
 */
function showMessage(isValid, inputElement, errorMsg, errorElement) {
   if (!isValid) {
      // Put up error message on errorElement or via alert()
      if (errorElement != null) {
         errorElement.innerHTML = errorMsg;
      } else {
         alert(errorMsg);
      }
      // Change "class" of inputElement, so that CSS displays differently
      if (inputElement != null) {
         inputElement.className = "error";
         inputElement.focus();
      }
   } else {  
      // Reset to normal display
      if (errorElement != null) {
         errorElement.innerHTML = "";
      }
      if (inputElement != null) {
         inputElement.className = "";
      }
   }
}
 
// Return true if the input length is between minLength and maxLength
function isLengthMinMax(inputId, errorMsg, minLength, maxLength) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the input value is a valid email address
// (For illustration only. Should use regexe in production.)
function isValidEmail(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var atPos = inputValue.indexOf("@");
   var dotPos = inputValue.lastIndexOf(".");
   var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}

// The "onclick" handler for the "reset" button to clear the display
function clearDisplay() {
   var elms = document.getElementsByTagName("*");  // all tags
   for (var i = 0; i < elms.length; i++) {
      if ((elms[i].id).match(/Error$/)) {  // no endsWith() in JS?
         elms[i].innerHTML = "";
      }
      if (elms[i].className == "error") {  // assume only one class
         elms[i].className = "";
      }
   }
   // Set initial focus
   document.getElementById("name").focus();
}
