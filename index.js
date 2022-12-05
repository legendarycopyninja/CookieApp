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

setTimeout(function(){
document.getElementById('uploadText').innerText = `Making the sale...`
},2000)

setTimeout(function(){
    document.getElementById("modal-inner").innerHTML =`<h2>Thanks you sucker! </h2>
<p>We just sold the rights to your eternal soul.</p>
<div class="idiot-gif">
    <img src="images/pirate.gif">
</div>`
},6000)

})

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
*/  




