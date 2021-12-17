// let a= document.getElementsByTagName('div');
// for(var i in a){
    // console.log(a);
// }
// let a=document.querySelectorAll('.main');
// console.log(a);
// let button=document.createElement('button');
// button.innerHTML="click";
// button.innerText="hi";
// button.style.backgroundColor="red"
// button.addEventListener('click',foo);
// document.body.append(button);
// function foo(){
//     var div=document.createElement('div');
//     div.innerHTML="hi this is div";
//     document.body.append(div);
//     div.style.color="green"
// }
// document.querySelector('button').addEventListener('click',foo);
// function foo(){
//     let res=prompt("enter any value");
//     let p=document.createElement('p');
//     p.innerHTML=res;
//     p.style.fontSize="70px";
//     document.body.append(p);
// }
// document.querySelector('span').addEventListener('mouseover',foo);
// function foo(){
//     let p=document.createElement('p');
//     p.style.color="red";
// }


//date and time assignment
// var dateelement=document.createElement('input');
// dateelement.setAttribute('type','date');
// dateelement.setAttribute('id','date');
// document.body.append(dateelement);

// var button=document.createElement('button');
// button.innerHTML="Display data";
// button.className="btn btn-primary";
// button.setAttribute('type','button');
// button.addEventListener('click',displaydata);
// document.body.append(button);


// function displaydata(){
//     let input=document.getElementById("date").value;
//    if(Date.parse(input)){
//     var inputdate=new Date(input);
//     var currentdate=new Date();
//     // console.log(inputdate,currentdate);
//     var millisecdiff=currentdate.getTime()-inputdate.getTime();
//     console.log(millisecdiff);
//    }

// }
// var b=document.createElement('a');
// b.setAttribute('href','http://www.google.com');
// b.innerHTML="www.google.com";
// document.body.append(b);
// function myGeeks() {
                  
//     /* Create anchor tag */
//     var g = document.createElement("A");
//     var f = document.createTextNode("GeeksForGeeks");
//     g.setAttribute("href", "https://www.geeksforgeeks.org/");
//     g.append(f);
//     // console.log('f');
//     document.getElementById("gfg").append(g);
// }
// var form=document.createElement('form');
// var label1=document.createElement(label1);

// label1.innertext="Firstname";
// form.append(label1);
// document.body.append(form,label1);
// var dateelement=document.createElement('input');
// dateelement.setAttribute('type','date');
// dateelement.setAttribute('type','id');
// document.body.append(dateelement);
var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);

var div=document.createElement(div);
function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);

    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hoursdiff=Math.floor(minutediff/60);
    console.log(hoursdiff);

    var daydiff=Math.floor(hoursdiff/24);
    console.log(daydiff);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

      console.log(currentdate.getMonth());
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);
   
    div.innerHTML=`yeardiff=${yeardiff}
    minutediff=${minutediff}
    daydiff=${daydiff}
    seconddiff=${seconddiff}`;

   }
   else{
     console.log("give a proper valid date")  
   }

}
document.body.append(div);

// div.innerHTML=`yeardiff=${yeardiff}
//                minutediff=${minutediff}
//                daydiff=${daydiff}
//                seconddiff=${seconddidd}`
// document.body.append(div);