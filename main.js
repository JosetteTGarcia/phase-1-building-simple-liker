// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
// Your JavaScript code goes here!


function hideError(){
  errorModal.classList.add("hidden")
}
document.addEventListener("DOMContentLoaded",() => {

  //Add the .hidden class to the error modal in the HTML so it does 
  //not appear when the page first loads
  hideError()
  //call Findlikes
  //findLikes();
  betterClickListener()

})

//When a user clicks on an empty heart:
//Invoke mimicServerCall to simulate making a server request

// function findLikes(){
// const likeArray = document.querySelectorAll(".like-glyph")

// likeArray.forEach((singleLike) => {
//   singleLike.addEventListener("click", () => console.log("you clicked me"))
// })
// }

function betterClickListener(){
  document.addEventListener('click', (event) => {
    if(event.target.classList[0] === 'like-glyph'){
      //promise: needs .then
      mimicServerCall()
        .then((resp) => {
          const activated = event.target.classList.contains("activated-heart");
          activated
            ? event.target.classList.remove("activated-heart")
            : event.target.classList.add("activated-heart")
        })
        .catch((error) => {
          errorModal.remove("hidden");
        setTimeout(()=> {
          hideError()
        }, 3000)
        })
    }
  } )
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
