'use strict';



// Set selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')



//close modal function
function closeModal(){
  overlay.classList.add('hidden')
  modal.classList.add('hidden')
}


//create event listener to show modal on button click
for( let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', function() {
        console.log(`${btnsShowModal[i].textContent} has been clicked`)
        modal.classList.remove('hidden') ;4
        overlay.classList.remove('hidden') ;
    

    })
}

// add even handlers to close modal on 'X' click or when the overlay is clicked.
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal )


//add in event listener to close modal on escape key press when modal is open.
document.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if(event.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal()

        }
    }


})