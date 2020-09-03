//console.log(document.body);
//console.log(document.querySelector("h1"));
//console.log(document.querySelector("#main-header"));
//console.log(document.querySelector(".test-text"));

let mainHeader = document.querySelector("#main-header");

//console.log(mainHeader);
//mainHeader.innerHTML = "Hei fra JavaScript";

mainHeader.innerHTML += "--- Hei fra JavaScript";
mainHeader.style = "color:red";