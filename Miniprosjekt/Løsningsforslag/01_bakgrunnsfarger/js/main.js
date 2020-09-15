window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    let fargekode = "#";
    for (let i = 0; i < 6; i++) {
      fargekode += Math.floor(Math.random() * 10);
    }
    document.querySelector("#hoved").style.backgroundColor = fargekode;
    document.querySelector("#boks").innerHTML = fargekode;
  }
});
