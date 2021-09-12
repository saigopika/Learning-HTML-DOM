let main = document.querySelector('div');

let navBar = document.createElement("header");
main.appendChild(navBar);
navBar.classList.add("header");

let header1 = document.createElement("div");
navBar.appendChild(header1);
const getProps = (text) => {
  h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
};
header1.appendChild(getProps("Sorty"));
header1.appendChild(getProps("Features"));
header1.appendChild(getProps("Pricing"));
header1.appendChild(getProps("Resources"));
header1.classList.add("navbar");
header1.style.paddingLeft= "20px";

let header2 = document.createElement("div");
navBar.appendChild(header2);
header2.appendChild(getProps("Login"));
header2.style.marginLeft = "auto";
header2.appendChild(getProps("SignUp"));
header2.classList.add("navbar");
header2.style.paddingRight = "20px";

// new section div
let sec1 = document.createElement("div");

let writing = document.createElement("div");
writing.innerText = "This is the page that has to be loaded";
writing.classList.add("styles")
sec1.appendChild(writing);

let bgimg = document.createElement("div");
  let background = document.createElement("img");
    background.src = "illustration.png";
    bgimg.appendChild(background);
    background.classList.add("image");
    sec1.appendChild(bgimg);
    main.appendChild(sec1);
    
sec1.classList.add("section1");
 