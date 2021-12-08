    //  1.  javascript print ways
    console.log("Hello guys!");
    // alert("Hey js!");
    // document.write("This is doc/ument write");
    
    
    //2. javascript console API
    console.log("Hello",3+3,"Another parameter");
    console.warn("This is a warning")
    console.error("This is an error")

    // 3.Javascript variables
    //It's a container which store data values
    var n1=3;
    var n2=2;
    console.log(n1+n2);

    // 4.data types
    // Numbers
    var num1=56;
    var num2=23;

    // string
    var str1="This is a string one";
    var str2='This is string two';

    // objects
    var marks={
        soumen:96,
        anu:97,
        arjun:99
    }

    // Booleans
    var a=true;
    var b=false;
    console.log(a);    

    //undefined
    var und;
    console.log(und);

    //null
    var nu=null;
    console.log(nu);
/*
     Two data types
    1.primitive(numbers,string,undefined,null,boolean,symbol)
    2.reference(Arrays,object)
*/

//Array
var arr=[2,3,4,5,6]
console.log(arr);

// /function
// DRY=Do not Repeat Yourself
function avg(a,b){
    return (a+b)/2;
}

c1=avg(2,3)
c2=avg(3,7)


//Conditionals
var age=45;
// if(age<=45){
//     console.log("You are not allowed");
// }else{
//     console.log("You are allowed");
// }

// single if statement
if(age==0){
    console.log("Invalid age");
}


// Array

var arr=[2,3,4,5,6];
// console.log(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function(element){
    // console.log(element);
})


var e=["fan",34,"gun",56,4,"fush"]
// console.log(e.push("sdsd"));
// e.pop();
// e.shift();
// e.unshift("hai")
// console.log(e);

let sr="Showman is a cool boy cool boy";
// console.log(sr.length);
// console.log(sr.indexOf("cool"))
// console.log(sr.lastIndexOf("cool"));
// console.log(sr.slice(0,4))
// d=sr.replace("Showman","komol");
// console.log(d,sr);

let elm=document.getElementsByClassName('container');
console.log(elm);
elm[0].style.background="blue";

createdelm=document.createElement("h1");
createdelm.innerText="this is a heading";
elm[0].appendChild(createdelm);

createEl=document.createElement("h4");
createEl.innerText="This is heading four";
elm[0].appendChild(createEl);

elm[0].replaceChild(createEl,createdelm);

