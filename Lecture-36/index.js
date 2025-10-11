// let hello = document.getElementById('hello');//get h1 by his id
// console.log(hello);

// let hello1 = document.getElementsByClassName('hello1')//get htmlcollection by his className
// console.log(hello1);

// let tag = document.getElementsByTagName('h1')//get htmlcollection by his TagName
// console.log(tag);

// let hello = document.getElementById('hello').innerHTML;
// console.log(hello);

// let hello = document.getElementById('hello').innerText;
// console.log(hello);

// let hello = document.getElementById('hello').textContent;
// console.log(hello);


// let hello = document.querySelector('h1').innerHTML;  for tagname
// console.log(hello);

// let hello = document.querySelector('#hello').innerHTML; //for id
// console.log(hello);

// let hello = document.querySelector('.hello1').innerHTML; //for class
// console.log(hello);

// let hello = document.querySelectorAll('.hello1'); //for class
// console.log(hello);

// let hello = document.querySelector('.hello1');
//  hello.style.backgroundColor = "pink";
//  hello.style.border = "2px solid black";
//  hello.style.padding = "5px";
//  hello.style.borderRadius = "15px";
// console.log(hello);

// hello.setAttribute("class" , "mohsin");
// hello.setAttribute('style' , 'background-color : gray');
// hello.removeAttribute("class");

// let newElement = document.createElement('p');
// newElement.innerText = "This is paragraph tag";

// let body = document.getElementsByTagName('body');//tagname use ni kro id kro
// body[0].appendChild(newElement);

//let body = document.getElementById('body');//tagname use ni kro id kro
// body.appendChild("hello" , newElement);//ye sirf ek element add krta h or text ni krta
//body.append("wow" , newElement);//ye hello bhi add krega

let data = ["Monitor","Mouse","Keyboard","Cpu","Mic","Ram","Motherboard","HardDisk","Led"];

let ul = document.getElementById('specs');
for(let i = 0; i < data.length; i++){
    // console.log(data[i]);

    let list = document.createElement('li');
    list.innerHTML = data[i];
    list.style.backgroundColor = "pink";
    list.style.border = "2px solid black";
    list.style.margin = "3px";
    list.style.padding = "5px";
    list.style.textAlign = "center";
    ul.append(list);
    
}
//ul.remove(); // ye ul element ko remove krdega

   


