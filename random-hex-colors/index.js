const bttn = document.querySelector('.bttn')
const color = document.querySelector('.color')


const HandlerClick = e => {
    const colorCharacters = '0123456789abcdef'    
    let colorHex = '#'


    for (let i=0; i<6; i++){
        let indexAleatorio = Math.floor(Math.random() * 16)
        colorHex += colorCharacters[indexAleatorio]
    }

    // console.log(colorHex)

    document.body.style.backgroundColor = colorHex
    color.innerText = colorHex    
}


bttn.addEventListener('click', HandlerClick)