
let btn = document.querySelector('#msg');
let input = document.querySelector('#number');
let number;

console.log(number);
// let x = number.toString();


input.addEventListener("input", function(){
number = input.value;
console.log(isNaN(parseInt(number)));
console.log(number);

  if (number !==""){
    btn.classList.remove("disabled");
  }
  else{
    btn.classList.add("disabled");
  }
  btn.addEventListener("click",function(){
    // console.log(number);
    let url = "https://wa.me/+20" + number;
    console.log(url);
    window.location.href = url;
  });
});
