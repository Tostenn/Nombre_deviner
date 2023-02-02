


const ch = document.querySelector('#num')
const bl = document.querySelector('.bilan')
function recu(){
  const data = ch.value
  if(data){
    ch.value = ''
    return data
  }
}
function reste(i){
  if (i >0){
    return 'il vous reste '+i+' essais'
  } 
  else {
    return 'il vous reste aucun essai'
    
  }
}
function bilan(partir,gagner){
  bl.innerHTML = 'partir : '+partir+', gagner : '+gagner
}
function num() {
  const ram = Math.round(Math.random()*100)
  return ram
}

let nums = num()
let i = 5
let partir = 0 
let gagner = 0
let cpt = 3
const but = document.querySelector('button')
const msg = document.querySelector('.msg p')
const titre = document.querySelector('.titre')
but.onclick = function (){
  const data = recu()
  if (data){
    //console.log(nums)
    if (i > 1 ){
      if (data == nums){
        msg.innerHTML = "<p style='color:green;'>trouver en "+ (6-i)+" essais</p>"
        i = 5
        nums = num()
        partir++
        gagner++
        cpt++
        bilan(partir,gagner)
      }
      else if (data > nums){
        i--
        if ((data - nums) < 5){
        titre.innerHTML = reste(i)
        msg.innerHTML = ' un peu grand essayer encore'
        }
        else{
        titre.innerHTML = reste(i)
        msg.innerHTML = ' trop grand essayer encore'
        }
      }
      else{
        i--
        if ((nums -data) < 5){
          titre.innerHTML = reste(i)
          msg.innerHTML =  ' un peu petit essayer encore'
        }
        else{
          titre.innerHTML = reste(i)
          msg.innerHTML =  ' trop petit essayer encore'
          
        }
      }
    console.log(i)
    }
    else{
      i = 5
      partir++
      cpt++
      bilan(partir,gagner)
      titre.innerHTML = 'nouvelle partie '
      msg.innerHTML = 'raté c\'était '+  nums+' on réessaye '
      nums = num()
    }
  }
}

const pop = document.querySelector('.pop')
const posp = pop.querySelector('.pop-pos')
const img = pop.querySelector('img')
const croix = pop.querySelector('.croix')
const pub = pop.querySelector('.pup')
const t_pub = 'publicité'

function ttp(ii){
  pub.innerHTML += t_pub[ii]
}

const cr1 = croix.querySelector('.cr1')
const cr2 = croix.querySelector('.cr2')
const t = [cr1,cr2]

croix.onclick = () =>{
  
  pop.style.opacity = '0'
  posp.style.opacity = '0'
  img.style.opacity = '0'
  t.forEach(el => el.style.opacity = '0')
  t[0].style.transform = 'rotate(0deg)'
  t[1].style.transform = 'rotate(0deg)'
  pop.style.display = 'none'
}
const h = window.innerHeight
pop.style.height = h+'px'

function crx(){
  t.forEach(el => el.style.opacity = '1')
  t[0].style.transform = 'rotate(35deg)'
  t[1].style.transform = 'translate(-7px) rotate(-35deg)'
}
function pops(){
  let n = 0
  if ((cpt % 5 == 0) && (cpt >0) ){
    pub.innerHTML = ''
    pop.style.display = 'block'
    pop.style.opacity = '1'
    posp.style.opacity = '1'
    img.style.opacity = '1'
    cpt++
    const t = setInterval( ()=>{
      
      const ll = t_pub.length-1 
      ttp(n)
      if (n == ll){
        clearInterval(t)
        crx()
      }
      else{n++}
    },500)
  }
}

window.onclick = ()=> pops()