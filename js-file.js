// your JavaScript file
/*Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. 

//creates new Element
document.createElement(tagName, [options])
//inline CSS
div.style.cssText = "color: blue; background: white;"
//use camelCase
div.style.backgroundColor
// adds class "new" to your new div
div.classList.add("new");

*/
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const pRed = document.createElement("p");
pRed.textContent = "Hey, I'm red!";
pRed.style.color = "red";
container.appendChild(pRed);

const h3Blue = document.createElement("h3");
h3Blue.textContent = "I'm a blue h3!";
h3Blue.style.color = "blue";
container.appendChild(h3Blue);

const divPinkBorder = document.createElement("div");
divPinkBorder.style.border = "1px solid black";
divPinkBorder.style.backgroundColor = "pink";

    const h1InDiv = document.createElement("h1");
    h1InDiv.textContent = "I'm in a div!";
    divPinkBorder.appendChild(h1InDiv);

    const pInDiv = document.createElement("p");
    pInDiv.textContent = "ME TOO!";
    divPinkBorder.appendChild(pInDiv);

container.appendChild(divPinkBorder);

// the JavaScript file
const btn = document.querySelector("#btn");//querySelector finds the id of the button and assigns it to the JS constant
btn.addEventListener("click", () => {
  alert("Hello World"); //we add an Eventlistener which gets activsted on a click and then a method of our choice
});

btn.addEventListener("click", function (e) {
    console.log(e); //this gives us a console log that contains all information about that particular Event (target, timestamp, offset, angle etc.)
  });

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue"; //turns the button blue on click
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  
  
