
let main = document.querySelector("div");


console.log(main);

let navbar = document.createElement("div");
navbar.style.cssText += `
position: relative;
left: 10px;
top: 0;
height:100px;
display: flex;
flex-direction:row;
width: 100%;
align-items:basline;
`;
const cu = (
    value,
    style = null,
    onClick = null,
    tag,
    parent
    ) => { 
    let tagName = document.createElement(tag);
    tagName.innerHTML = value;
    onClick !== null && tagName.addEventListner("click", onClick);
    style !== null && (tagName.style.cssText += style);
    parent.appendChild(tagName);
}
  
 
  
let head1 = document.createElement("div");
head1.style.cssText +=`display:flex;column-gap:30px;`;
let head2 = document.createElement("div");
head2.style.cssText +=`margin-left:auto;display:flex; ;column-gap:30px; padding-right:10px;`;

navbar.appendChild(head1);
navbar.appendChild(head2);
cu('Sorty',
`font-size:40px;display:flex; `,null,`h1`,head1);
cu('Features',
`font-size:20px; display:flex;
 font-family:sarif;padding-top:25px;`,null,`p`,head1);
cu('Pricing',
`font-size:20px;display:flex;
font-family:sarif; padding-top:25px;`,null,`p`,head1);
cu('Resources'
,`font-size:20px;display:flex; 
font-family:sarif;padding-top:25px;`,null,`p`,head1);

cu('Login',
`font-size:20px;display:flex;
font-family:sarif; padding-top:25px;`,null,`p`,head2);


cu("Sign-Up",
`border-radius:25px;margin-top:37px;
margin-right:20px; height:36px;
border-color:transparent;
background-color:#8EE5D1;font-size:20px; 
font-family:sarif;`,
null,
"button",head2);




let side=document.createElement("div");
side.style.cssText=`left:20px;display:flex;
width:100%;margin-top:20px;
align-items:center;`
let side1=document.createElement("div");
side1.style.cssText+=`width:50%; padding-left:70px;`
let side2=document.createElement("div");

cu("The best way to manage projects and tasks",
`font-size:40px;`,null,`h1`,side1);
cu("Focus on what is important to you and rely on us <br> for organizing your tasks",
`font-size:20px;`,null,`p`,side1);
cu(" Get-Started ",
`border-radius:25px;margin-top:4px;
margin-right:20px; height:50px;
border-color:transparent;
background-color:#8EE5D1;font-size:30px; 
font-family:sarif;`,
null,
`button`,side1);
let image = document.createElement("img");
image.src = "illustration.png";

image.style.cssText += `
width:50vw;
height: 100%;
padding-right: 2rem;
`;
   

let email=document.createElement("div");
email.style.cssText=`left:20px;display:flex;
width:100%;margin-top:20px;
align-items:center;`


let e = document.createElement("input");
e.setAttribute("type", "text");
e.setAttribute("placeholder", "email address");
cu("Book a demo",
`border-radius:15px;
border-color:transparent;
background-color:#8EE5D1;font-size:20px; 
font-family:sarif;`,
null,
"button",head2);
side2.appendChild(image)
email.appendChild(e);

main.appendChild(email);

side.appendChild(side1);
side.appendChild(side2);
main.appendChild(navbar);
main.appendChild(side);