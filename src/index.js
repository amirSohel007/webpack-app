import { calculateNumber } from './app/asset/js/app'

import './app/asset/css/app.scss'

export const num1 = document.getElementById('num1')
export const num2 = document.getElementById('num2')
const result = document.getElementById('result')

result.addEventListener('click', ()=> {
    console.log(calculateNumber(parseInt(num1.value), parseInt(num2.value)))
})
