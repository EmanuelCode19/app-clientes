const edit = document.querySelector('#editClient');
function getParam(param){
    const parametro = new URLSearchParams(location.search)
    return parametro.get(param)
    }
    
window.addEventListener("load" , e => {
    const id = getParam("id")
    
    const url = `http://localhost:3004/user/${id}`
    
    fetch(url).then(response => response.json()).then(user => {
    
    
    if(user.id === undefined){
        alert('el id no existe','danger')
       
    }else{
        edit.elements[0].value = user.name;
        edit.elements[1].value = user.apellido;
        edit.elements[2].value = user.email;
        edit.elements[3].value = user.user;
        edit.elements[4].value = user.password;
     
       
    }
       })
    })

edit.addEventListener('submit',SaveUser)

function SaveUser(e){
    e.preventDefault()
    const inpunts = e.target.elements;

    console.log(inpunts)
    const user = {
        id: getParam("id"),
        name: inpunts[0].value,
        apellido: inpunts[1].value,
        email: inpunts[2].value,
        user: inpunts[3].value,
        password: inpunts[4].value,
    }

    const url = `http://localhost:3004/user/${getParam("id")}`

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"PUT",
          body:JSON.stringify(user),
          headers: header
     }

   fetch(url,configuration).then(response => response.json())


    alert('Se edito el usuario','success')

    toclean()

}

function toclean(){
    edit.elements[0].value ='';
    edit.elements[1].value ='';
    edit.elements[2].value ='';

}



