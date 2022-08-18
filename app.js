const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl= document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const btnGenerate = document.getElementById('generate')

const upperletters = "ABCDEFGHIJKLMnOPQRSTUVWXYZ"
const lowerletters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "~!@#$%^&*"

function getlowercase(){ 
    return lowerletters[Math.floor(Math.random()* lowerletters.length)]
}

function getuppercase(){ 

    return upperletters[Math.floor(Math.random()* upperletters.length)]}

function  getnumbers(){
    return numbers[Math.floor(Math.random()* numbers.length)]
}

function getsymbol(){
    return symbol[Math.floor(Math.random()* symbol.length)]
}

function generatePassword(){
    const len =lenEl.value
    let password=""
    for (let i=0; i<len; i++)
    {
        const x= generateX()
        password +=x 
    }
    pwEl.innerText = password
}

function generateX(){
    const xs=[]
    if(upperEl.checked){
        xs.push(getuppercase())
    }
    if(lowerEl.checked){
        xs.push(getlowercase())
    }
    if(numberEl.checked){
        xs.push(getnumbers())
    }
    if(symbolEl.checked){
        xs.push(getsymbol())
    }
    if(xs.length === 0) {return ''}

    return xs[Math.floor(Math.random()*xs.length)]
}

btnGenerate.addEventListener('click', generatePassword)
copyEl.addEventListener('click', ()=>{
    const textarea= document.createElement('textarea')
    const password = pwEl.innerText
    if(!password){
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    pwEl.innerText=""
    alert('password copied to clipboard')
});




