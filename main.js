splat.onclick = readySetStart;


function readySetStart() {
  const newElement = document.createElement("p");
  const newContent = document.createTextNode("OK, then let's start!");
  newElement.appendChild(newContent);
  const currentPlace = document.getElementById("div1");
  document.body.insertBefore(newElement, currentPlace);

}
