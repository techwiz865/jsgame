splat.onclick = ready;
function ready() {
  const existingElement = document.getElementById("splat");
  existingElement.remove();
  const existingPara = document.getElementById("splat-para");
  existingPara.remove();
  const newElement = document.createElement("p");
  const newContent = document.createTextNode("OK, then let's start!");
  newElement.appendChild(newContent);
  const currentPlace = document.getElementById("div1");
  document.body.insertBefore(newElement, currentPlace);
  const newElement2 = document.createElement("button");
  newElement2.setAttribute("id","rock_button");
  newElement2.setAttribute("class","button");
  const newContent2 = document.createTextNode("Rock");
  newElement2.appendChild(newContent2);
  const currentPlace2 = document.getElementById("div1");
  document.body.insertBefore(newElement2, currentPlace2);
  const newElement3 = document.createElement("button");
  newElement3.setAttribute("id","paper_button");
  newElement3.setAttribute("class","button");
  const newContent3 = document.createTextNode("Paper");
  newElement3.appendChild(newContent3);
  const currentPlace3 = document.getElementById("div1");
  document.body.insertBefore(newElement3, currentPlace3);
  const newElement4 = document.createElement("button");
  newElement4.setAttribute("id","scissor_button");
  newElement4.setAttribute("class","button");
  const newContent4 = document.createTextNode("Scissor");
  newElement4.appendChild(newContent4);
  const currentPlace4 = document.getElementById("div1");
  document.body.insertBefore(newElement4, currentPlace4);
  const newElement5 = document.createElement("p");
  newElement5.setAttribute("id","winner_display");
  const currentPlace5 = document.getElementById("div2");
  document.body.insertBefore(newElement5, currentPlace5);
  const rock = document.getElementById('rock_button');
  const scissor = document.getElementById('scissor_button');
  const paper = document.getElementById('paper_button');
  rock.addEventListener('click', setAndPrettyMuchStartRock);
  paper.addEventListener('click', setAndPrettyMuchStartPaper);
  scissor.addEventListener('click', setAndPrettyMuchStartScissor);
}

your_choice;


function setAndPrettyMuchStartRock() {
  your_choice = "rock";
  setAndPrettyMuchStart();
}

function setAndPrettyMuchStartPaper() {
  your_choice = "paper";
  setAndPrettyMuchStart();
}

function setAndPrettyMuchStartScissor() {
  your_choice = "scissor";
  setAndPrettyMuchStart();
}

function setAndPrettyMuchStart() {
  choices = ["rock", "paper", "scissor"];
  computer_choice = choices[(Math.floor(Math.random() * choices.length))];
  if (computer_choice == your_choice) {
    tie()
  } else if ( computer_choice == "rock") {
    if (your_choice == "paper") {
      youWin()

    }
    if (your_choice == "scissor") {
      youLose()
    }
  
  }
  else if ( computer_choice == "paper") {
    if (your_choice == "rock") {
      youLose()
    }
    if (your_choice == "scissor") {
      youWin()
    }

  }
  else if ( computer_choice == "scissor") {
    if (your_choice == "paper") {
      youLose()
    }
    if (your_choice == "rock") {
      youWin()
    }
  } 
}

function youLose() {
  document.getElementById("winner_display").innerHTML = "You lose! The computer's choice was " + computer_choice + ".";
  const winner_display_class = document.getElementById("winner_display");
  winner_display_class.className = "loser"
}

function youWin() {
  document.getElementById("winner_display").innerHTML = "You win! The computer's choice was " + computer_choice + ".";
  const winner_display_class = document.getElementById("winner_display");
  winner_display_class.className = "winner"
}

function tie() {
  document.getElementById("winner_display").innerHTML = "You tie!";
  const winner_display_class = document.getElementById("winner_display");
  winner_display_class.className = "tied"
}
