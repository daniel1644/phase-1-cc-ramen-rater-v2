// index.js
const API = "http://localhost:3000/ramens";

el("new-ramen").addEventListener("submit", createNewRamen)
 
fetch(API)
  .then((res) => res.json())
  .then(renderRamens);

function renderRamens(ramens){
  ramens.forEach(renderRamen);
}

function renderRamen(ramen){
  const ramenMenuDiv = el("ramen-menu");

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  ramenImage.addEventListener("click", e => renderDetails(ramen))
}

function renderDetails(ramen){
  const detailImage = el('detail-image')
  const ramenName = el('ramen-name')
  const restaurantName = el('restaurant-name')
  const ratingDisplay = el('rating-display')
  const commentDisplay = el('comment-display')

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name;
  restaurantName.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;

}

function createNewRamen(e){
  e.preventDefault();

  const newRamen = {
    name: e.target.name.value,
    rating: e.target.rating.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value
    // comment: e.target['new-comment'].value.
   

  };
  renderRamen(newRamen);
  // e.target.reset();
}

function el(elementName){
  return document.getElementById(elementName)
}
























// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // Add code
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
