





function afficherResultat(score,nbMotsProposes){
let affichResult= document.querySelector(".zoneScore span")
affichResult.innerText=`${score}/${nbMotsProposes}`
  console.log ("votre score est: "+score+" sur "+nbMotsProposes)
}
function afficherProposition(motsAficher){
  let zoneProposition=document.querySelector(".zoneProposition")
  zoneProposition.innerText= motsAficher
}

function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
  location.href = mailto
}

function lancerJeu (){
  initAddEventListenerPopup()
  let score=0
  let i=0
  let listePropositions = listeMots

  
 let bnValider=document.querySelector(".zoneSaisie button")
 let inputEcriture=document.getElementById("inputEcriture")
 afficherProposition(listePropositions[i])
 bnValider.addEventListener("click", () =>{
   
  if (inputEcriture.value === listePropositions[i]) {
    score++
}
  i++
  afficherResultat(score,i)

   inputEcriture.value=""
 if(listePropositions[i]===undefined){
    afficherProposition("Le jeu est fini")
bnValider.disabled =true
  }else{
afficherProposition(listePropositions[i])

  }
  
 })

 
 
 let choixUtilisateur= document.querySelectorAll(".optionSource input")
 
  for(let index=0 ; index <choixUtilisateur.length ; index++){
    choixUtilisateur[index].addEventListener("change",(event)=>{
       console.log(event.target.value)

       if(event.target.value === '1'){
        listePropositions=listeMots
       }else{
        listePropositions=listePhrases
       }
       afficherProposition(listePropositions[i])
    })
  }
  afficherResultat(score,i)
  // let zonePartage=document.querySelector(".zonePartage button")
  // zonePartage.addEventListener("click" , ()=>{
  //   console.log("yes")
  //   form.style.display = "block"
    // let body = document.querySelector("body")
    // body.addEventListener("click" , ()=>{
    //   form.style.display = "none"
    // })
    

  // })

  let form = document.querySelector("form")
 
  form.addEventListener("submit" , (event)=>{
  event.preventDefault()
  let baliseNom=document.getElementById("nom")
  let nom=baliseNom.value
  let baliseEmail=document.getElementById("email")
  let email=baliseEmail.value
  let scoreEmail=`${score}/${i}`
  
  afficherEmail(nom,email,scoreEmail)
  
  })
}
lancerJeu ()