window.addEventListener("keydown", (e) => {
  console.log(e);
  farge = "";
  if (e.code === "Space") {
    for (let i = 0; i < 6; i++) {
      let verdi = Math.floor(Math.random() * 10);
      farge += verdi;
    }
    document.querySelector("#hoved").style.backgroundColor = `#${farge}`;
    document.querySelector("#boks").innerHTML = `#${farge}`;
  }
});
