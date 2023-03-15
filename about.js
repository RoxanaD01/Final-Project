//REVIEWS

let userTexts = document.getElementsByClassName("user-text");
let userImgs = document.getElementsByClassName("user-img");

function showReview() {
    for(userPic of userImgs) {
        userPic.classList.remove("active-img");
    }
    for(usText of userTexts) {
        usText.classList.remove("active-text");
    }
    let i = Array.from(userImgs).indexOf(event.target);

    userImgs[i].classList.add("active-img");
    userTexts[i].classList.add("active-text");
}

//FETCH

const reviews = fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.posts[0])
    console.log(data.posts[1])
    console.log(data.posts[2])
    console.log(data.posts[3])
    console.log(data.posts[4])
    console.log(data.posts[5])
});



