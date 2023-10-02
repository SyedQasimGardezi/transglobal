const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

let people = [
  {
    photo:
      'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
    name: "Susan Smith",
    profession: "Long-Haul Truck Driver",
    description:
      "I can confidently say that Transgolbal Express is the best partner a trucker could ask for. Their customer support and Services, have made my job a breeze. The reliability and efficiency of their services have helped me find loads easily. I highly recommend Transgolbal Express to fellow truckers.",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
    name: "Anna Grey",
    profession: "Owner-Operator",
    description:
      "Transgolbal Express has been an invaluable part of my success story. Their comprehensive maintenance programs have saved me both time and money. Plus, their competitive rates and flexible scheduling options make them the go-to choice for any trucking needs. Thanks to Transgolbal Express, I've seen my profits soar.",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
    name: "Branson Cook",
    profession: "Local Delivery Driver",
    description:
      "I've been working as a local delivery driver for years, and Transgolbal Express has consistently exceeded my expectations. I appreciate the friendly and professional staff who make every interaction a pleasure. Transgolbal Express truly understands the needs of drivers like me, making them my first choice for any transportation services.",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
    name: "Julius Grohn",
    profession: "Cross-Country Hauler",
    description:
      "I've crisscrossed the country countless times in my career, and I wouldn't trust anyone else but Transgolbal Express with my freight. Their commitment to on-time deliveries and their advanced tracking technology give me peace of mind on the long hauls. Plus, their drivers are some of the friendliest and most professional I've encountered.",
  },
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  tl.to(reviewWrap, {
    duration: 0.3,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`,
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`,
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0,
  });
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

window.addEventListener("resize", () => {
  description.style.height = "100%";
});
