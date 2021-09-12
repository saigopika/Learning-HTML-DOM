let main = document.querySelector('div');
// creating basic grid
let nav = document.createElement('div');
let header1 = document.createElement('div');
let header2 = document.createElement('div');
let content = document.createElement('div');
let content1 = document.createElement('div');
let content2 = document.createElement('div');
let content3 = document.createElement('div');
let footer = document.createElement('div');
let footer1 = document.createElement('div');
let footer2 = document.createElement('div');
  

header1.style.cssText = `column-gap:35px; align-items:center; display:flex;`
header2.style.cssText = ` 
margin-left:auto;
align-items:baseline;
padding-right:20px;
 column-gap:30px;
 display:flex;`
 nav.style.cssText=`display:flex;
width:100%; 
height:100px;
background-color:black;`

 // login 
 let d=document.createElement('div');
 d.style.display = "none";
 d.style.cssText +=`position: absolute;
 top:50%;
 transform:translate(-50%,-50%);
left:50%;
background-color: black;
 width:300px;align-items:center;
 height:200px; `

// create and update non-event tags
 const create = (tag,value,style,parent) =>
 {
     let tagName=document.createElement(tag);
     tagName.style.cssText = style;
     tagName.innerText = value;
     parent.appendChild(tagName);
     
     
 }

 create('h1','Sorty',`margin-left:10px;
 font-size:40px; color:white;`,header1);
 create('p','Features',`
 font-size:20px; color:white;`,header1)
 create('p','Pricing',`
 font-size:20px; color:white;`,header1)
 create('p','Features',`
 font-size:20px; color:white;`,header1)

 //login button
let btn=document.createElement('button');
btn.style.cssText=`
 font-size:20px; 
 padding:.5rem;
 opacity:0.8;

 background-color:white;
 border:2px solid black;
 margin-top:30px;
border-radius:20px;`
btn.textContent='Login';
btn.addEventListener('click',handleClick);

function handleClick(event) {
       d.style.display = "block";
       main.style.opacity=0.5;
 
}
document.body.appendChild(d);
  let btn1=document.createElement('button');
  btn1.style.cssText=`
 font-size:20px;
 opacity:0.8;
  background-color:white;
  border:2px 
  solid black;
  padding:.5rem;
  margin-top:30px; 
  border-radius:25px;`
  btn1.textContent='Sign-Up';

//form and input
 let form = document.createElement("form");
     form.style.cssText =`display:flex; flex-direction:column;
    row-gap:10px; align-items:center;`   
    form.setAttribute('name','fname');           
    let n=document.createElement('input');
    n.setAttribute('type','text');
    n.setAttribute('name','email');
    n.setAttribute('placeHolder','Email Address');
    n.style.cssText=`margin-top:50px;`
    let p=document.createElement('input');
    p.setAttribute('type','text');
    p.setAttribute('placeHolder','password');
    let s = document.createElement("input");
                s.setAttribute("type", "submit");
    s.addEventListener('click',loginSubmit);
   
   //submit function
    function loginSubmit(e)
  {    
    let x = document.fname.email.value;
    if (x == "") {
      alert("Name must be filled out");
    }
      else{
        e.preventDefault();
        d.style.display='none';
        main.style.opacity=1;
      }
  }

  //creating close button

   let clos =document.createElement('p')
    clos.textContent="X" ;
   clos.style.cssText=`color:white;float:right;font-size:18px;
   font-weight:bold;margin-top:6px; margin-right:10px;`
    clos.addEventListener('click',loginSubmit);

    
    d.appendChild(clos)
    d.appendChild(form)
    form.appendChild(n)
    form.appendChild(p)
    form.appendChild(s)
    

 header2.appendChild(btn);
  header2.appendChild(btn1)
nav.appendChild(header1)
nav.appendChild(header2)
main.appendChild(nav);
