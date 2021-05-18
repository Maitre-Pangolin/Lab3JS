addEventListener("submit", (e) => e.preventDefault());

const ex1_1_form = document.getElementById("ex1_1");
const ex1_1_input = document.getElementById("input1_1");

function calculatrice(calcul) {
  const match = calcul.match(/^(\d+(?:.\d+)?)([+-/*])(\d+(?:.?\d+)?)$/); // Match operation entre entier ou float
  if (match == null) return (ex1_1_input.value = "Calcul invalide");
  if (match[2] == "+")
    return (ex1_1_input.value = parseFloat(match[1]) + parseFloat(match[3]));
  if (match[2] == "-")
    return (ex1_1_input.value = parseFloat(match[1]) - parseFloat(match[3]));
  if (match[2] == "*")
    return (ex1_1_input.value = parseFloat(match[1]) * parseFloat(match[3]));
  if (match[2] == "/")
    return parseInt(match[3]) == 0
      ? (ex1_1_input.value = "🔥 Division par zero 💣 ")
      : (ex1_1_input.value = parseInt(match[1]) / parseInt(match[3]));
}

ex1_1_form.addEventListener("submit", () => calculatrice(ex1_1_input.value));

const ex1_2_form = document.getElementById("ex1_2");
const ex1_2_input = document.getElementById("input1_2");
const ex1_2B_input = document.getElementById("input1_2B");

function swap() {
  let c = ex1_2_input.value;
  ex1_2_input.value = ex1_2B_input.value;
  ex1_2B_input.value = c;
}

ex1_2_form.addEventListener("submit", swap);

const ex1_3_form = document.getElementById("ex1_3");
const ex1_3_input = document.getElementById("input1_3");

function maximum() {
  let numbers = ex1_3_input.value.split(" ");
  numbers = numbers.filter((e) => {
    if (e.match(/\d+(?:.\d+)?/)) return true;
  });
  if (numbers.length == 0)
    return (ex1_3_input.value = "Pas de nombres dans cette liste");
  ex1_3_input.value = ex1_3_input.value = numbers.reduce((max, e) => {
    if (parseInt(e) > max) max = parseInt(e);
    return max;
  }, parseInt(numbers[0]));
}

ex1_3_form.addEventListener("submit", maximum);

const ex2_form = document.getElementById("ex2");
const ex2_input = document.getElementById("input2");
const myrect = document.getElementById("lerectangle");

function rectangleCaculation() {
  if (!ex2_input.value.match(/\d+x\d+/))
    return (ex2_input.value = "Rectangle invalide");
  const dim = ex2_input.value.split("x");
  ex2_input.value = `Périmètre : ${
    parseInt(dim[0]) + parseInt(dim[1])
  }, Surface : ${parseInt(dim[0]) * parseInt(dim[1])}`;
  myrect.style.width = dim[0] + "px";
  myrect.style.height = dim[1] + "px";
  myrect.style.backgroundColor = "blue";
}

ex2_form.addEventListener("submit", rectangleCaculation);

const ex3_form = document.getElementById("ex3");
const ex3_input = document.getElementById("input3");

function circleCalculation() {
  const radius = ex3_input.value;
  if (!radius.match(/^\d+$/)) return (ex3_input.value = "Rayon non valide");
  ex3_input.value = `Perimetre : ${(2 * Math.PI * radius).toFixed(
    2
  )}, Surface ${(Math.PI * radius ** 2).toFixed(2)}`;
}

ex3_form.addEventListener("submit", circleCalculation);

const ex4_form = document.getElementById("ex4");
const ex4_input = document.getElementById("input4");

ex4_form.addEventListener("submit", () => {
  if (!ex4_input.value.match(/^\d+$/))
    return (ex4_input.value = "Age non valide");
  ex4_input.value =
    ex4_input.value > 18
      ? `Wow ${ex4_input.value} ans ,tu es majeur !`
      : `${ex4_input.value} ans c'est trop jeune !`;
});

const ex5_form = document.getElementById("ex5");
const ex5_input = document.getElementById("input5");

ex5_form.addEventListener("submit", () => {
  /*const months = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  if (
    !ex5_input.value.match(/^\d+$/) ||
    ex5_input.value > 12 ||
    ex5_input.value < 1
  )
    return (ex5_input.value = "Chiffre non valide");
  ex5_input.value = months[parseInt(ex5_input.value) - 1];
  */
  switch (ex5_input.value) {
    case "1":
      ex5_input.value = "Janvier";
      break;
    case "2":
      ex5_input.value = "Fevrier";
      break;
    case "3":
      ex5_input.value = "Mars";
      break;
    case "4":
      ex5_input.value = "Avril";
      break;
    case "5":
      ex5_input.value = "Mai";
      break;
    case "6":
      ex5_input.value = "Juin";
      break;
    case "7":
      ex5_input.value = "Juillet";
      break;
    case "8":
      ex5_input.value = "Août";
      break;
    case "9":
      ex5_input.value = "Septembre";
      break;
    case "10":
      ex5_input.value = "Octobre";
      break;
    case "11":
      ex5_input.value = "Novembre";
      break;
    case "12":
      ex5_input.value = "Decembre";
      break;

    default:
      ex5_input.value = "Input invalide";
  }
});

const ex6_form = document.getElementById("ex6");
const ex6_input = document.getElementById("input6");

ex6_form.addEventListener("submit", () => {
  const month = ex6_input.value.toLowerCase();
  const month31 = [
    "janvier",
    "mars",
    "mai",
    "juillet",
    "août",
    "aout",
    "octobre",
    "decembre",
    "décembre",
  ];
  const month30 = ["avril", "juin", "septembre", "novembre"];
  const month28 = ["février", "fevrier"];
  if (month31.includes(month))
    return (ex6_input.value = `Il y a 31 jours en ${month}`);
  if (month30.includes(month))
    return (ex6_input.value = `Il y a 30 jours en ${month}`);
  if (month28.includes(month))
    return (ex6_input.value = `Il y a 28 jours en ${month}`);
  ex6_input.value = `Mois ${month} invalide`;
});

let sketch = function (p) {
  let x = 0;
  let y = 0;
  let h = 0;
  let w = 0;
  let rectDraw = false;
  let isClicked = false;

  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(200);
    p.noStroke();
    if (rectDraw) {
      if (mouseInside()) {
        p.fill(255, 0, 0);
        p.rect(x, y, w, h);
        p.fill(0);
        p.text("Right into the Danger Zone", x + w / 2, y + h / 2);
      } else {
        p.fill(0, 0, 0, 200);
        p.rect(x, y, w, h);
      }
    }
    if (p.mouseIsPressed) {
      if (
        p.mouseX < p.width &&
        p.mouseX > 0 &&
        p.mouseY < p.height &&
        p.mouseY > 0
      ) {
        p.fill(0, 50);
        p.rect(x, y, w, h);
      }
    }

    p.mousePressed = function () {
      x = p.mouseX;
      y = p.mouseY;
      w = 0;
      h = 0;
      if (
        p.mouseX < p.width &&
        p.mouseX > 0 &&
        p.mouseY < p.height &&
        p.mouseY > 0
      )
        isClicked = true;
      rectDraw = false;
    };
    p.mouseDragged = function () {
      w = p.mouseX - x;
      h = p.mouseY - y;
    };
    p.mouseReleased = function () {
      rectDraw = true;
    };

    if (!isClicked) {
      p.textAlign(p.CENTER);
      p.text(
        " 🐱‍👤 Click and drag to create a rectangle 🐱‍👤",
        p.width / 2,
        p.height / 2
      );
    }

    function mouseInside() {
      let minX, minY, maxX, maxY;
      if (w > 0) {
        minX = x;
        maxX = x + w;
      } else {
        minX = x + w;
        maxX = x;
      }
      if (h > 0) {
        minY = y;
        maxY = y + h;
      } else {
        minY = y + h;
        maxY = y;
      }

      if (
        p.mouseX > minX &&
        p.mouseX < maxX &&
        p.mouseY > minY &&
        p.mouseY < maxY
      )
        return true;

      return false;
    }
  };
};

let myp5 = new p5(sketch, "container");
