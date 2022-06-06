const newCliente = document.querySelector('#NewUser');

newCliente.addEventListener('submit',SaveUser)

function SaveUser(e){
    e.preventDefault()
    const inpunts = e.target.elements;

    console.log(inpunts)
    const user = {
        name: inpunts[0].value,
        apellido: inpunts[1].value,
        email: inpunts[2].value,
        user: inpunts[3].value,
        password: inpunts[4].value,
    }

    const url = 'http://localhost:3004/user'

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(user),
          headers: header
     }

   fetch(url,configuration).then(response => response.json())

        toclear();

    alert('Se Guardo el usuario','success')

}
function toclear(e){
newCliente.elements[0].value = "";
newCliente.elements[1].value = "";
newCliente.elements[2].value = "";
newCliente.elements[3].value = "";
newCliente.elements[4].value = "";
}





