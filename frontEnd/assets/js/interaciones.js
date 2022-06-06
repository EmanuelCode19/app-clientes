function getparam(param){
    const parametro = new URLSearchParams(location.search);
    return parametro.get(param);
}
const messages = document.querySelector('#mensajes');

const btnMsj = document.createElement('a');

btnMsj.classList.add('btn','btn-primary')

btnMsj.textContent="Bandeja de entrada"

btnMsj.href=`verCliente?id=${getparam("id")}`

messages.appendChild(btnMsj)

const form = document.querySelector('#updateCliente')

document.addEventListener('DOMContentLoaded',async() => {
const id = getparam("id");

const urlCliente = `http://localhost:9000/api/client/${id}`
          
const responseCliente = await fetch(urlCliente)
          
const dataCliente = await responseCliente.json()

form.elements[0].value = dataCliente.name
})

form.addEventListener('submit',interacionCliente)

async function interacionCliente(e){
e.preventDefault()

if(form.elements[1].value !== ""){
    const id = getparam("id");

const urlCliente = `http://localhost:9000/api/client/${id}`
          
const responseCliente = await fetch(urlCliente)
          
const dataCliente = await responseCliente.json()

form.elements[0].value = dataCliente.name
    
const urlUser = `http://localhost:9000/api/user/${localStorage.getItem('id')}`
const responseUser = await fetch(urlUser);
const dataUser = await responseUser.json() 

    const inpunts = e.target.elements;
    const cliente = {
        name: dataCliente.name,
        user:{
                id: dataUser._id,
                name: dataUser.name,
                user: dataUser.user, 
        },
        message:inpunts[1].value,
        createAd: new Date().toISOString(),
        
    }

    // console.log(cliente)

    const url = `http://localhost:9000/api/message`

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json()).then(data => console.log(data))


    alert('mensaje enviado','success')

    toclean()

}else{
    alert('todos los campos son necesarios','danger')
}
}

function toclean(){
    form.elements[0].value ='';
    form.elements[1].value ='';
}



