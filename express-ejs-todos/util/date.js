const today = new Date()
const currentDay = today.getDay()     

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}

const day = today.toLocaleDateString('en-US', options)

module.exports = day