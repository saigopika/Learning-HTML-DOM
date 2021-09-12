let main = document.querySelector('div');
let nav= document.createElement('div');
nav.style.cssText +=`

height:100px;
display:flex;
width:100%;
`;
const fun = (tag,val,style,parent)=>
{
    let tagName=document.createElement(tag);
    tagName.innerHTML=val;
    tagName.style.cssText =style;
    parent.appendChild(tagName);

}

let h1 = document.createElement('div')
h1.style.cssText =`width:50%;display:flex;
column-gap:30px;`

fun(`h1`,
'Sorty',`font-size:40px;
display:flex;`,h1);
fun(`p`,
'Features',`font-size:20px; padding-top:22px;
display:flex;`,h1);
fun(`p`,
'Pricing',`font-size:20px; padding-top:22px;
display:flex;`,h1);
fun(`p`,
'Resourses',`font-size:20px; padding-top:22px;
display:flex;`,h1);

let h2 = document.createElement('div');
h2.style.cssText =`margin-left:auto; display:flex;
column-gap:30px; padding-right:20px;`

fun(`p`,
'Login',`font-size:20px; padding-top:22px;
display:flex;`,h2);
fun(`button`,
'Sign-Up',`font-size:20px;height:30px;
border-radius:25px; margin-top:36px;padding-top:2px;
display:flex;border-color:transparent;
background-color:#8EE5D1`,h2);



let side=document.createElement("div");
side.style.cssText=`left:20px;display:flex;
width:100%;margin-top:20px;
align-items:center;`
let side1=document.createElement("div");
side1.style.cssText+=`width:50%; padding-left:70px;`
let side2=document.createElement("div");


let image = document.createElement("img");
image.src = "illustration.png";

image.style.cssText += `
width:50vw;
height: 100%;
padding-right: 2rem;
`;
side2.appendChild(image)



let na= document.createElement('div');
na.style.cssText +=`
background-color:blue;
height:100px;
display:flex;
width:100%;
`;



side.appendChild(side1);
side.appendChild(side2);
nav.appendChild(h1);
nav.appendChild(h2);
main.appendChild(nav);
main.appendChild(side);

main.appendChild(na);




