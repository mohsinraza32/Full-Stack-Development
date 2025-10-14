// let child1 = document.getElementById('child1');
// let maindiv = document.getElementById('main-div');

// event bubbling
// maindiv.addEventListener('click' , () => {
//     console.log('parent clicked');

// })
// child1.addEventListener('click' , () => {
//     console.log('child clicked');

// })

//event capturing
// maindiv.addEventListener('click' , () => {
//     console.log('parent clicked');

// },true)
// child1.addEventListener('click' , () => {
//     console.log('child clicked');

// },true)

//Building mini project Drag and Drop

let box1 = document.querySelector('.box-1');
let box2 = document.querySelector('.box-2');
let items = document.getElementsByClassName('item');

for(let item of items){
    item.addEventListener('dragstart', (e) => {
        //  console.log(e.target);
        let data = e.target;
        // console.log(data);
        box2.addEventListener('dragover', (e) => {
           e.preventDefault();
           e.stopPropagation();
        })
        box2.addEventListener('drop', () => {
            box2.append(data);
            data = '';
        })
        box1.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        })
        box1.addEventListener('drop', () => {
            box1.append(data);
            data = '';
        })
        
         
    })
}