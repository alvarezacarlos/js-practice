const colors = document.querySelectorAll('.colors')
const newRGBColor = {red: colors[0].value, green: colors[1].value, blue: colors[2].value}
const handleChange = e => {
    newRGBColor[e.target.id] = e.target.value    
    document.body.style.backgroundColor = `rgb(${newRGBColor.red}, ${newRGBColor.green}, ${newRGBColor.blue})`    
    e.target.nextElementSibling.innerText = e.target.value
}
colors.forEach(color => color.addEventListener('change', handleChange))