const TEXT = document.querySelector(".rev-text");
const btn = document.getElementById("generate-btn");
let ul = document.querySelector(".reversals");

btn.addEventListener("click", () => {
  console.log(TEXT.value);
  let split = TEXT.value.split("\n\n"); //split up
  ul.innerHTML = "";
  //logging every new line:
  const newStrings = [];
  split.forEach(function (item) {
    if (item.includes("amount in pence")) {
      let resultString = item
        .substring(item.indexOf(": ") + 2)
        .replace(/:.*;/, ":");

      let firstPart = resultString.split(" : ")[0] + " : ";
      let secondPart = resultString.split(" : ")[1] + " : ";
      let thridPart = resultString.split(" : ")[2].replace(/.*-/, "");
      let finalString = firstPart + secondPart + thridPart;
      newStrings.push(finalString);
      ul.innerHTML += `<li>${finalString}</li>`;
    }
  });

  if (newStrings.length <= 0) {
    ul.innerHTML = `<li>Input maybe invalid, remember to add spaces between errors or no reversals found </li>`;
  }
});
