splat.onclick = readySetStart
already_clicked = false;
function readySetStart() {
  if (already_clicked = false) {
    const newElement = document.createElement("p");
    const newContent = document.createTextNode("OK, then let's start!");
    newElement.appendChild(newContent);
    const currentPlace = document.getElementById("div1");
    document.body.insertBefore(newElement, currentPlace);
    const newElement2 = document.createElement("button");
    const newContent2 = document.createTextNode("Rock");
    newElement2.appendChild(newContent2);
    const currentPlace2 = document.getElementById("div2");
    document.body.insertBefore(newElement2, currentPlace2);
    const newElement3 = document.createElement("button");
    const newContent3 = document.createTextNode("Paper");
    newElement3.appendChild(newContent3);
    const newElement4 = document.createElement("button");
    const newContent4 = document.createTextNode("Scissor");
    newElement4.appendChild(newContent2);
    const currentPlace4 = document.getElementById("div3");
    document.body.insertBefore(newElement4, currentPlace4)
  }
 else {
   alert("You already clicked this!")
 }
}
