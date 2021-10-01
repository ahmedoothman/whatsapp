
let btn = document.querySelector('#msg');

btn.addEventListener("click",function(){
  let number = document.querySelector('#number').value;
  // console.log(number);
  let url = "https://wa.me/+20" + number;
  console.log(url);
  window.location.href = url;
});
