function horario(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
let botao = document.querySelector('.botao')
let h1 = document.querySelector('.agaum')
let resultado = document.getElementById('resultado')
let novo = document.querySelector('.novo-p')
let timer;

botao.addEventListener('click', function(e){
    clearInterval(timer)
    timer = setInterval(() => {
        resultado.innerHTML = horario()
    }, 1000);
    botao.remove() //remove o botão.
    h1.remove() //remove o h1
    let par = document.createElement('p')
    par.innerHTML = 'Seja bem vindo. Agora são exatamente:'
    novo.appendChild(par)
})

