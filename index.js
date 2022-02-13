const carouselImages = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__images img');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 250;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 250;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});


const Name = document.getElementById("name");
const Password = document.getElementById("password");
const Form = document.getElementById("form");
const errorElement = document.getElementById("error");
const Email = document.getElementById("email");
const Pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ ;



Form.addEventListener("submit",(e)=>{
    let messages = [];

    if (Name.value ==='' || Name.value == null){
        messages.push('please type your name !')
        Name.style.border="2px solid red"
    }

    // if(Password.value.length<= 8){
    //     messages.push("password must be more than 8 characters")
    // }
    // if(Password.value ==="password"){
    //     messages.push("password cannot be word password !")
    // }
    // if(Password.value.length >= 20){
    //     messages.push("password must be less than 20 characters")
    // }

    if(!Email.value.match(Pattern)||(Email =="")){
      messages.push("invalid mail adress!")
      Email.style.border="2px solid red"
    }
   
    

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(",")
        errorElement.style.color="red"

    } 
    if(messages.length == 0){
      alert("your entries have been sent")
   }
    
   
})



