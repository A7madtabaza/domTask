//Q1 : Assume an array of different fruits is given (5 elements), you have to 
// use dom to add images for all  items of the array to the
//  html element as (ul) and show it in the html file.
//   give it a suitable style.
// let fruits = ["apple", "orange", "banana",  "strawberry", "mango"];
// let urlImage=["imges1.webp","orange.jpg","Ceylon.jpg","imges2.webp","mango.webp"];
// let containerName = document.createElement("ul");
// document.body.appendChild(containerName);

// for(let i=0; i<fruits.length ;i++){
// let newElement = document.createElement("li");
// let imges =  document.createElement("img");
// containerName.appendChild(newElement); 
// containerName.appendChild(imges); 
// newElement.textContent = fruits[i];

// imges.setAttribute("src", urlImage[i]);
// imges.style.width = "120px", height = "120px";

// }
let arr = ['1', '2', '3', '4'];
console.log(indexOf(arr,'1'));
console.log(indexOf(arr,'5'));
function indexOf(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}


