const edit = document.querySelector('#editClient');
function getParam(param){
    const parametro = new URLSearchParams(location.search)
    return parametro.get(param)
    }
    
window.addEventListener("load" , e => {
    const id = getParam("id")
    
    const url = `http://localhost:9000/api/client/${id}`
    
    fetch(url).then(response => response.json()).then(cliente => {
    
    
    edit.elements[0].value = cliente.name;
    edit.elements[1].value = cliente.cellphone;
    edit.elements[2].value = cliente.address;
       })
    })

edit.addEventListener('submit',SaveClient)

async function SaveClient(e){
    e.preventDefault()

    const idUser = localStorage.getItem('id');

    const responseUser = await fetch(`http://localhost:9000/api/user/${idUser}`)

    const dataUser = await responseUser.json();
   
    const inpunts = e.target.elements;
    console.log(inpunts)
    const cliente = {
        id: getParam("id"),
        name: inpunts[0].value,
        cellphone: inpunts[1].value,
        address: inpunts[2].value,
        user: {
            id: dataUser._id,
            name: dataUser.name,
            cellphone: dataUser.cellphone,
            user: dataUser.user,
            address: dataUser.address 
        },
        createAd: new Date().toISOString()
        
    }

    console.log(cliente)

    const url = `http://localhost:9000/api/client/${getParam("id")}`

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"PUT",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json()).then(data => console.log(data))


    alert('Se edito el cliente','success')

    toclean()

}

function toclean(){
    edit.elements[0].value ='';
    edit.elements[1].value ='';
    edit.elements[2].value ='';

}



