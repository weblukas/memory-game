const cards = ['cow-1', 'cow-2', 'eleph-1', 'eleph-2', 'lamb-1', 'lamb-2', 'penguin-1', 'penguin-2', 'rat-1', 'rat-2', 'shark-1', 'shark-2']

const allCards = Array.from(document.querySelectorAll('.card'));


const clickedCard = null;

allCards.forEach(el=>{
    el.addEventListener('click', function(e){
        const currentCard = e.currentTarget
        el.classList.toggle('hidden');
        console.log(e.currentTarget.getAttribute('data-pic'));
        console.log(currentCard.getAttribute('data-pic'));
        
        if(!currentCard) {
            currentCard = EventTarget;
        } else if (currentCard){
            if (currentCard.getAttribute('data-pic') === EventTarget.getAttribute('data-pic'))
        }

    })
})