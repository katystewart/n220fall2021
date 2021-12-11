let clickedBox = null;

function onClick(e) {
    //set the target
    let target = e.currentTarget;

    //does not allow for first target box or its match to be clicked
    if (target == clickedBox && target.className.includes('match')) {
        return;
    }
    //reveals hidden card color on click
    target.className = target.className.replace('data-hidden', '');

    //if colors match, removes card from being clicked; default cursor
    target.className += 'match';

    //when first card is clicked, card is remembered and hidden color is displayed
    if(!clickedBox) {
        clickedBox = target;
    } 
        //check to see if old card click is a color match with the new card that is clicked
        else if (clickedBox.getAttribute('data-color') !== target.getAttribute('data-color')) {
          //if no match, hide both cards after two seconds
            setTimeout(function() {
                clickedBox.className = clickedBox.className.replace('match', '') + 'data-hidden';
                target.className = target.className.replace('match', '') + 'data-hidden';
                clickedBox = null;
            }, 2000);
        } else {
            //resets count
            clickedBox = null;
        }
        
}



//reloads window on button press
function resetGame() {
    document.location.href = "";
   
}