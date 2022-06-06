const newCliente = document.querySelector('#NewUser');

newCliente.addEventListener('submit',SaveClient)

 async function SaveClient(e){
    e.preventDefault()

    if(newCliente.elements[0].value !== "" && newCliente.elements[1].value !== "" && newCliente.elements[2].value !== ""){
        const idUser = localStorage.getItem('id');

    const responseUser = await fetch(`http://localhost:9000/api/user/${idUser}`)

    const dataUser = await responseUser.json();

    const inpunts = e.target.elements;

    console.log(inpunts)
    const cliente = {
        name: inpunts[0].value,
        cellphone: inpunts[1].value,
        address: inpunts[2].value,
        createAd: new Date().toISOString(),
        user:{
                id: dataUser._id,
                name: dataUser.name,
                cellphone: dataUser.cellphone,
                user: dataUser.user,
                address: dataUser.address 
        },
        message:""
        
    }

    const url = 'http://localhost:9000/api/client'

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json()).then(data => console.log(data))


    alert('Se Guardo el cliente','success')
    }else{
        alert('todos los campos son necesarios','danger')
    }

}





