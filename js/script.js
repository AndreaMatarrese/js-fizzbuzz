console.log('calcolo da 1 a 100')
let eleSquares= document.querySelector('.squares')

// ciclo contatore
// ORDINE CONDIZIONI IMPORTANTE PER NON FAR FERMARE IL CICLO
for (let i = 1; i <= 100; i++){
    if (i % 15 == 0) {
        let i= 'FizzBuzz'
        eleSquares.innerHTML = eleSquares.innerHTML + `<div class="sq multi3-5">${i}</div>`;
        console.log('divisibile per 3')
    } else if(i % 5 == 0){
        let i= 'Buzz'
        eleSquares.innerHTML = eleSquares.innerHTML + `<div class="sq multi5">${i}</div>`
        console.log('divisibile per 5')
    } else if (i % 3 == 0 ){
        let i= 'Fizz'
        eleSquares.innerHTML = eleSquares.innerHTML + `<div class="sq multi3">${i}</div>`
        console.log('divisibile per 3 e 5')
    } else{
        eleSquares.innerHTML = eleSquares.innerHTML + `<div class="sq">${i}</div>`
    }
}


