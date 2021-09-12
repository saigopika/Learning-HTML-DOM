let main = document.querySelector('div');
let b = document.querySelector('body');
b.style.cssText = "color:white; margin:0px";
// creating basic grid
let nav = document.createElement('div');
let header1 = document.createElement('div');
let header2 = document.createElement('div');
let content = document.createElement('div');
let content1 = document.createElement('div');
let content2 = document.createElement('div');

//background-image:IMG_20200728_103956.jpg;
let footer = document.createElement('div');
let footer1 = document.createElement('div');
let footer2 = document.createElement('div');
  //document.body.style.cssText=`background-image:url(sai.jpg); padding:10px;`

header1.style.cssText = `column-gap:35px; align-items:center; display:flex;`
header2.style.cssText = ` 
margin-left:1rem;

align-items:center;

 display:flex;`
 nav.style.cssText=`display:flex;
 justify-content:space-between;
background-color:black;`

content.style.cssText=`
display:flex;

width:100%;
height:500px;
`
img=document.createElement('img');
img.style.cssText = `
background-size: contain;
background-position:center;
background-repeat: no-repeat;
width:100%;
height:400px;
background-image:url(illustration.png);`


content.appendChild(content1);
content.appendChild(content2);
content1.style.cssText= `height:400px; 
width:50%; background-size: contain;
background-repeat: no-repeat;
`
content2.style.cssText= `height:400px; width:50%;`
content2.appendChild(img);
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
//form formation
 
button1=document.createElement('button');
button1.innerText=111;
content1.appendChild(button1);
button1.addEventListener('click',displayForm);





// create and update non-event tags
 const create = (tag,value,style,parent) =>
 {
     let tagName=document.createElement(tag);
     tagName.style.cssText = style;
     tagName.innerText = value;
     parent.appendChild(tagName);
     
     
 }

 create('h1','Sorty',` color:white;`,header1);
 create('p','Features',`
 font-size:20px; color:white;`,header1)
 create('p','Pricing',`
 font-size:20px; color:white;`,header1)
 create('p','Features',`
 font-size:20px; color:white;`,header1)
create('h1','Form',`color:black;display:flex;
flex-direction:column;
text-align: center;`,content1);
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

  btn1.addEventListener('click',alertmsg);
   
  function alertmsg(){
    alert('alert msg');
    let buttontext = document.createElement("p");
    
   a=button1.innerText;
   button1.innerText=parseInt(a)+1;
    content.appendChild(buttontext);
  }

//form and input 1
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
      let buttontext = document.createElement("p");
  buttontext.textContent = "proceed";
  content.appendChild(buttontext);
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
    clos.addEventListener('click',closeButton);
//closeButton function
function closeButton()
{ 
  d.style.display='none';
  main.style.opacity='1';

}

//form and input
let form1 = document.createElement("form");
form1.style.cssText =`display:flex; flex-direction:column;
row-gap:10px; align-items:center;`   
form1.setAttribute('name','fname1');           
let n1=document.createElement('input');
n1.setAttribute('type','text');
n1.setAttribute('name','email1');
n1.setAttribute('placeHolder','Email Address');
n1.style.cssText=`margin-top:50px;`
let p1=document.createElement('input');
p1.setAttribute('type','text');
p1.setAttribute('placeHolder','password');
let s1 = document.createElement("input");
           s1.setAttribute("type", "submit");
s1.addEventListener('click',loginSubmit);

function displayForm(){
  content1.appendChild(form1)
  form1.appendChild(n1)
  form1.appendChild(p1)
  form1.appendChild(s1)
}







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
main.appendChild(content);