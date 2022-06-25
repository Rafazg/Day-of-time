function carregar() {
    
let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let data = new Date()
let hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas`;


if (hora >= 0 && hora < 12) {
    img.src = 'imgmanha.png'
    h1.innerHTML ='Mensagem do Dia'
    txt.innerHTML ='Lembre de ser persistente'
    
    document.body.style.background = '#fcee9'

} else if (hora >= 12 && hora < 18){
    img.src = 'imgtarde.png'
    h1.innerHTML = 'Mensagem da Tarde'
    txt.innerHTML ='Levante a cabeça e sorria'
    document.body.style.background = '#b95b1c'
}else{
    img.src = 'imgnoite.png'
    h1.innerHTML = 'Mensagem da Noite'
    txt.innerHTML ='Descansa que amanhã tem mais'
    document.body.style.background = '#040d35da'
    
}
}