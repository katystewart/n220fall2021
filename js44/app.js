let clickedBox = null;

function onClick(event) {
    //set the target
    let target = event.currentTarget;

    //reveals hidden card color on click
    target.className = target.className.replace('data-hidden', '');

    //if box has been clicked, removes card from being clicked; default cursor
    target.className += 'match';

    //when first card is clicked, card is remembered and hidden color is displayed; set the target
    //haven't clicked card yet
    if(!clickedBox) {
        clickedBox = target;
    } 
        //check to see if old card click is a color match with the new card that is clicked
        //have already clicked a card
        else if (clickedBox.getAttribute('data-color') !== target.getAttribute('data-color')) {
          //if no match, hide both cards after two seconds
            setTimeout(function() {
                clickedBox.className = clickedBox.className.replace('match', '') + 'data-hidden';
                target.className = target.className.replace('match', '') + 'data-hidden';
                clickedBox = null;
            }, 2000);
        } else {
            //resets count; keeps the matched cards from going away
            clickedBox = null;
        }
        
}

//reloads window on button press
function resetGame() {
    window.location.reload();
   
}