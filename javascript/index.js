function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesdateElement = losAngelesElement.querySelector(".date");
  let losAngelestimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesdateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelestimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");

  let parisdateElement = parisElement.querySelector(".date");
  let paristimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisdateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  paristimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
