let btn = document.querySelector('#msg');
let input = document.querySelector('#number');
let number;

input.addEventListener("input", function(){
number = input.value;
  if (number !==""){
    btn.classList.remove("disabled");
  }
  else{
    btn.classList.add("disabled");
  }
  btn.addEventListener("click",function(){
    let url = "https://wa.me/+20" + number;
    window.location.href = url;
  });
});
