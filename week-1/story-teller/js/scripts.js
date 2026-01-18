/* image image image */
const myImage = document.querySelector("#story-image");

const images = [
  "https://snipboard.io/bLT2o9.jpg",
  "https://snipboard.io/larVyX.jpg",
  "https://snipboard.io/9mFvfu.jpg",
  "https://snipboard.io/Rxk08b.jpg",
  "https://snipboard.io/IAyKcx.jpg",
  ];

/* text text text */
const myText = document.querySelector("#story-text");

const text = [
  "In 1955 Montgomery, Alabama, segregation was enforced by law. Black passengers were required to give up their seats to white riders—no matter their age.",
  "Claudette Colvin was only 15 years old when she decided she had had enough. Sitting on her way home from school, she refused to stand.",
  "Claudette was dragged from the bus, arrested, and taken to jail. She did not shout. She did not fight. She simply said no.",
  "Her story was pushed aside. Because of her age, her gender, and public scrutiny, Claudette was not chosen to represent the movement.",
  "Claudette Colvin became a key plaintiff in Browder v. Gayle, the case that ended bus segregation in Montgomery. Her courage helped change history—even if her name was forgotten.",
];

// Track current step
let currentIndex = 0;

// Listen for clicks
myImage.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = images.length - 1;
  }

  myImage.src = images[currentIndex];
  myText.textContent = text[currentIndex];

  // Update progress dots
  updateProgress(currentIndex);
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}