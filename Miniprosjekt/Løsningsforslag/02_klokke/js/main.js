window.addEventListener("keydown", (e) => {
  console.log(e);

  if (e.code === "Space") {
    let fargekode = getColorCode();
    document.querySelector("#hoved").style.backgroundColor = fargekode;
    document.querySelector("#boks").innerHTML = fargekode;
    document.querySelector("#boks").borderColor = getColorCode();
  }
});

function getColorCode() {
  let farge = "#";
  for (let i = 0; i < 6; i++) {
    farge += Math.floor(Math.random() * 10);
  }
  return farge;
}
