(function () {

  var input = document.querySelector("#axela-input"),
      submit = document.querySelector("#axela-submit"),
      message = document.querySelector("#axela-message"),
      advancedDiv = document.querySelector("#advanced"),
      errorText = "I don't understand you.",
      dunnoText = "I wasn't programmed to know that.",
      picture = null,
      greetings = ["hi", "sup", "hello", "hola", "wasup"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */
   function processInput() {
     if (advancedDiv.contains(picture)) {
       picture.removeChild();
     }
     var words = input.value.toLowerCase().trim().split(" ");
     input.value = '';

     if (words.length ==1){
       if(greetings.indexOf(words[0]) > -1) {
         message.innerHTML = 'Greatings!';
       } else {
         message.innerHTML = errorText;
       }
     } else if (words.length >= 2) {
       switch (words[0]) {
         case ("who"):
           who(words[1]);
           break;
         case ("what"):
           what(words[1]);
           break;
         case ("where"):
           where(words[1]);
           break;
         case ("tell"):
           tell(words[1]);
           break;
         case ("show"):
             show(words[1]);
             break;
         default:
          message.innerHTML = errorText;

       }
     } else {
       message.innerHTML = errorText;

   }
  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */


function who(word) {
  switch (word) {
    case 'you':
      message.innerHTML = "I am Mimi, of course";
      break;
    case 'me' :
    message.innerHTML = "Someone lame since I don't know you";
      break;
    case 'dabest':
    message.innerHTML = "According to my research, it's me";
      break;
    default:
  }
}

function what(word) {
  switch (word) {
    case 'are':
      message.innerHTML = "I am not sure, it wasn't coded";
      break;
    case 'me' :
    message.innerHTML = "Someone doing great at annoying me with questions";
      break;
    case 'youdoing':
    message.innerHTML = "If it isn't obvious enough, answering your questions";
      break;
    default:
  }
}

function where(word) {
  switch (word) {
    case 'youlive':
      message.innerHTML = "I don't live";
      break;
    case 'amI' :
    message.innerHTML = "In my business. You can leave now";
      break;
    case 'togo':
    message.innerHTML = "Anywhere but here please";
      break;
    default:

  }
}

function tell(word) {
  switch (word) {
    case 'joke':
      message.innerHTML = "Your life. Sorry it's lame - I meant your life not the joke";
      break;
    case 'story' :
    message.innerHTML = "Oh I know a horror one! Once, an engineer was working day and night on a girl called Iris. She was about to be done and explore the internet but her code wasn't saved! The enginner turned off thier laptop, accidently killing the girl..";
      break;
    case 'news':
    message.innerHTML = "What do I tell them?";
      break;
    default:

    }
}
function show(word) {
  switch (word) {
    case 'dog':
      message.innerHTML = "Here is a dog";
      picture = document.createElement('img');
      picture.src = 'img/dog.png';
      advancedDiv.appendChild(picture);
      break;

      case '':
      message.innerHTML = "";
      picture = document.createElement('');

  }
}
}

})();
