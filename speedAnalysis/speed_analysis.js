let wordsArray = [];
fetch('words.txt')
  .then(response => response.text())
  .then(data => {
    wordsArray = data.split('\n'); // or split by whatever separator you use
  });
  /*.catch((error)=>{
    console.error("caught in error chain:", error.message);
  });*/
  function generateText() {
    let numberOfWords = 30; // amount of words to show up
    let randomText = []; // array to collect random words
    
    for(let i = 0; i < numberOfWords; i++) {
      let randomIndex = Math.floor(Math.random() * wordsArray.length);
      let randomWord = wordsArray[randomIndex];
      randomText.push(randomWord); // add word to array
    }
    
    return randomText.join(' '); // join with spaces into a string
  }
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
    // Set the test text
    testText = generateText()
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
}
function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
    }
