//Choose a random color
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }

// Connecting to the DOM
const body = document.querySelector("body");
const button = document.querySelector("button");
const bgColor = document.querySelector("#backgroundColor");

// Event Listener added
button.addEventListener("click", loadColor);

function loadColor() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "colors.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let color = JSON.parse(this.responseText);
      const colorIndex = parseInt(Math.random() * color.length);

      bgColor.innerHTML = color[colorIndex].name;
      body.style.backgroundColor = color[colorIndex].hex;
      //console.log(color[0].name);
    }
  };

  xhr.send();
}
