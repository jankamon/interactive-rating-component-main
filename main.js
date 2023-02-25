const submitBtn = document.getElementById('submit-button');
const ratingState = document.getElementById('rating-state');
const thankState = document.getElementById('thank-state');
const ratingBtn = document.getElementById('rating-ul');
const selectedRating = document.getElementById('selected-rating');

let rated = false;

const submit = () => {
    if(rated) {
        ratingState.style.display = 'none';
        thankState.style.display = 'block';
        console.log('Submit function is working');
    }
}

const savingRating = (event) => {
    selectedRating.innerHTML = event.target.innerHTML;
    rated = true;
    console.log('Rating saving function is working. Chosen: ' + event.target.innerHTML);
}


ratingBtn.onclick = savingRating;
submitBtn.onclick = submit;