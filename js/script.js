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
    }
  };

  xhr.onerror = function () {
    alert("Something went wrong!");
  };

  xhr.send();
}
