/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById("modal");

setTimeout(function() {
modal.style.display = 'inline';
},3000)

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/

const modalCloseBtn = document.getElementById("modal-close-btn");

modalCloseBtn.addEventListener('click',function() {
    modal.style.display = 'none';
})

/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/

const form = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById('decline-btn')



/*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/ 


form.addEventListener('submit',function(e){
    e.preventDefault()
    modalText.innerHTML=`<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div`

 /* 
Challenge: 
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!

1. Make it so that 1.5 seconds after seeing the 
   "Making the sale..." message, the modal is 
   cleared of its content and the following 
   string of HTML is displayed instead.
   
   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/ 

setTimeout(function(){
document.getElementById('uploadText').innerText = `Making the sale...`
},2000)

const nameDisplay = new FormData(form)
const name = nameDisplay.get('fullName')

setTimeout(function(){
    document.getElementById("modal-inner").innerHTML =`<h2>Thanks <span class="modal-display-name">${name}</span> you sucker! </h2>
<p>We just sold the rights to your eternal soul.</p>
<div class="idiot-gif">
    <img src="images/pirate.gif">
</div>`
modalCloseBtn.disabled = false
},6000)

})

/*   
Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
  
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.  
*/ 

const buttonBox = document.getElementById('modal-choice-btns')
declineBtn.addEventListener('mouseenter', function(){
buttonBox.classList.toggle('reverse')
})

 





