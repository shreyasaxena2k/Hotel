let x=document.getElementById('clogin')
let y=document.getElementById('hlogin')
let z=document.getElementById('btn')

function costumerlogin(){
    x.classList.remove('show')
    y.classList.remove('show')
}
function hotellogin(){
    y.classList.add('show')
    x.classList.add('show')
       
}

let a=document.getElementById('cregister')
let b=document.getElementById('hregister')
let c=document.getElementById('btn')
function customerregister(){ 
    console.log(77)
    a.classList.remove('show')
    b.classList.remove('show')
}
function hotelregister(){
    console.log(777)
    
    b.classList.add('show')
    a.classList.add('show')
}

