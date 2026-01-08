// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-1.jpg") {
    myImage.setAttribute("src", "images/image-2.jpg");
  } else {
    myImage.setAttribute("src", "images/image-1.jpg");
  }
});

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file does two things:
  1. The image changer toggles between two different images when the user clicks on the image. I assigned my image using the myImage variable, then I added an event listener that basically waits for someone to click on the image, when the click happens, it runs an "if...else" structure that checks if the first image is being shown, if it is then it changes to the second image. 
  2. First I created a button, then I used JS to create a function that prompts the user to type in thier name, after which I set an "if" statement, which says, if a name is entered, save it, and put it into the greeting. The name is also saved locally so that when the user comes back to the page, their name is still there. If no name is found, the prompt will appear asking for the name.
​
  The key pattern I learned: Was the use of event listeners. Which are a way to run a function when something happens (click, hover, etc.). In this case, I used it to run functions when the image and button were clicked.
*/