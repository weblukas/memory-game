
      const cards = ['cow-1', 'cow-2', 'eleph-1', 'eleph-2', 'lamb-1', 'lamb-2', 'penguin-1', 'penguin-2', 'rat-1', 'rat-2', 'shark-1', 'shark-2']
      const allCards = Array.from(document.querySelectorAll('.card'));
      // w sumie nie użyłem tej tablicy, później użyje 
      let checkedCardPic = false;
      let disableClick = false;
      let firstCard, secondCard;
      

      allCards.forEach(el=>{
          el.addEventListener('click', checkCard)})
          
          
          function checkCard(){

            if(!checkedCardPic) {
              checkedCardPic = true;
              disableClick = false;
              firstCard = this;
              this.classList.toggle('hidden')
              
            }else {
              checkedCardPic = false;
              secondCard = this;
              this.classList.toggle('hidden')
              matchCards();
              // allCards.forEach(el => el.removeEventListener('click', checkCard))
               
            }
            
              // allCards.forEach(el => el.addEventListener('click', checkCard))
            
            
           
            function matchCards(){
              if(firstCard.getAttribute('data-pic') === secondCard.getAttribute('data-pic')){
                
              }else {
                setTimeout(function(){
                  firstCard.classList.toggle('hidden');
                  secondCard.classList.toggle('hidden');
                }, 500)
                
              }
            }
          }
