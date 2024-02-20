let yourName;
let decision;
let forward;
let then = document.querySelector("#then");
let hidden = document.querySelector(".message");
let myBtn = document.querySelector(".myBtn");
let now = document.querySelector("#now");
let cute = document.querySelector(".hello");
let cry = document.querySelector(".cry");
let yesMessage = document.querySelector(".yesBtn");
let noMessage = document.querySelector(".noBtn");
let mochiImage = document.querySelector(".display");
let purposes = document.querySelector("#purposes");
let note = document.querySelector("#note");

const getInput = () => {
  yourName = prompt("Enter Your First Name here");
  if (yourName === null) {
    then.innerHTML = `Hello Stranger! I want to say something to you`;
    hidden.innerHTML = "";
    cute.style.display = "none";
  } else {
    then.innerHTML = `Hello ${yourName}! I want to say something to you`;
    hidden.innerHTML = "";
  }
  myBtn.remove();

  // Delay the display of the confirm box by 2000 milliseconds (2 seconds)
  setTimeout(() => {
    decision = confirm("Do you wanna hear that?");

    if (!decision) {
      cry.classList.replace("cry", "okay");
      cute.style.display = "none";
      hidden.innerHTML = "";
      then.innerHTML = "";
      now.innerHTML = "💔Sorry!<br>Good Bye!";
      return;
    }
    then.innerHTML = "<b>Thanks for your confirmation</b>";

    // Delay the display of the second prompt box by 2000 milliseconds (2 seconds)
    setTimeout(() => {
      forward = prompt("Are you ready? If so, type yes in the box");
      forward = forward.toLowerCase();
      if (forward === "yes") {
        mochiImage.classList.replace("display", "show");
        then.innerHTML = "I love you! Baby, do you love me?";
        yesMessage.classList.replace("display", "yesBtn");
        noMessage.classList.replace("display", "noBtn");
        cute.classList.replace("hello", "display");
      } else {
        then.innerHTML = "I'm not gonna give up! 😂";
        setTimeout(() => {
          again = prompt("please!Enter yes");
          again = again.toLowerCase();
          if (again === "yes") {
            mochiImage.classList.replace("display", "show");
            then.innerHTML = "I love you! Baby, do you love me?";
            yesMessage.classList.replace("display", "yesBtn");
            noMessage.classList.replace("display", "noBtn");
            cute.classList.replace("hello", "display");
          } else {
            cute.style.display = "none";
            cry.classList.replace("cry", "okay");
            then.innerHTML = "";
            now.innerHTML = "💔Sorry!<br>Good Bye!";
          }
        }, 1000);
      }
    }, 1000);
  }, 1000);
};
myBtn.addEventListener("click", getInput);

let count = 0;
let breaks = document.querySelector("#break");
const swapButton = () => {
  count++;
  if (count === 1) {
    noMessage.innerHTML = "yes";
    breaks.classList.remove("display");
    breaks.innerHTML = "Please don't break me. Say Yes!🥹💔";
    noMessage.style.color = "black";
  } else {
    noMessage.remove();
    yesMessage.remove();
    then.innerHTML = "";
    mochiImage.classList.replace("show", "display");
    purposes.classList.replace("display", "purpose");
    note.classList.remove("text");
    breaks.classList.add("display");
  }
};
const swapYes = () => {
  noMessage.remove();
  yesMessage.remove();
  then.innerHTML = "";
  mochiImage.classList.replace("show", "display");
  purposes.classList.replace("display", "purpose");
  note.classList.remove("text");
  breaks.classList.add("display");
};
noMessage.addEventListener("click", swapButton);
yesMessage.addEventListener("click", swapYes);
/*let yourName;
let decision;
let forward;
let then = document.querySelector("#then");
let hidden = document.querySelector(".message");
let myBtn = document.querySelector(".myBtn");
let now = document.querySelector("#now");
let cute = document.querySelector(".hello");
let cry = document.querySelector(".cry");
const yesMessage = document.querySelector(".yesBtn");
const noMessage = document.querySelector(".noBtn");
let mochiImage = document.querySelector(".display");
const getInput = () => {
  yourName = prompt("Enter Your First Name here");
  if (yourName === null) {
    then.innerHTML = `Hello Stranger  I want to say you something`;
    hidden.innerHTML = "";
    cute.style.display = "none";
  } else {
    then.innerHTML = `Hello ${yourName}  I want to say you something`;
    hidden.innerHTML = "";
  }
  myBtn.remove();

  // Delay the display of the confirm box by 2000 milliseconds (2 seconds)
  setTimeout(() => {
    decision = confirm("you want to go to the forward");

    if (!decision) {
      cry.classList.replace("cry", "okay");
      cute.style.display = "none";
      hidden.innerHTML = "";
      then.innerHTML = "";
      now.innerHTML = "💔Sorry!<br>Good Bye!";

      return;
    }
    then.innerHTML = "<b>Thanks for Your confirmation</b>";

    // Delay the display of the second prompt box by 2000 milliseconds (2 seconds)
    setTimeout(() => {
      forward = prompt("You ready, if so type yes in the box");
      forward = forward.toLowerCase();
      if (forward === "yes") {
        mochiImage.classList.replace("display", "show");
        then.innerHTML = "I LOve you! Baby do You love me!";
        yesMessage.classList.replace("display", "yesBtn");
        noMessage.classList.replace("display", "noBtn");
        cute.classList.replace("hello", "display");
      } else {
        then.innerHTML = "I'm not giving up! 😂";

        // Delay the display of the second prompt box by 1000 milliseconds (1 second)
        setTimeout(() => {
          forward = prompt("Enter yes");
          if (forward.toLowerCase() === "yes") {
            mochiImage.classList.replace("display", "show");
            then.innerHTML = "I LOve you! Baby do You love me!";
            yesMessage.classList.replace("display", "yesBtn");
            noMessage.classList.replace("display", "noBtn");
            cute.classList.replace("hello", "display");
          } else {
            cute.style.display = "none";
            cry.classList.replace("cry", "okay");
            then.innerHTML = "";
            now.innerHTML = "💔Sorry!<br>Good Bye!";
          }
        }, 1000);
      }
    }, 1000);
  }, 1500);
};

const moveButton = () => {
  const x = Math.random() * (window.innerWidth - 83);
  const y = Math.random() * (window.innerHeight - 34);
  noMessage.style.transform = `translate(${x}px, ${y}px)`;
};

noMessage.addEventListener("touchstart", moveButton);*/
