
const urlApi = 'http://localhost:9000/api/user'
const checkbox = document.querySelector('.form-check-input')
const inputPassword = document.querySelector('#exampleInputPassword1')

if(checkbox){
    checkbox.addEventListener('click', () => {
        if(checkbox.checked === true){
            inputPassword.type = 'text'
        }
    
        else if(checkbox.checked === false){
            inputPassword.type ='password'
        }
    })
}

const login = document.querySelector('#login-form')

if(login){
    login.addEventListener('submit', validarUsuario);
}


function validarUsuario(e){
    e.preventDefault()
  const inputs = e.target.elements;

  const user ={
      name: inputs[0].value,
      pass:inputs[1].value,
  }

   obtener(user) 
}

async function obtener(user){
     
    const response = await fetch(urlApi);

    const data = await response.json()

     const validar = data.find(data => data.user === user.name && data.password === user.pass)

     if(validar){
         localStorage.setItem('name',validar.name)
         localStorage.setItem('id',validar._id)
         window.location.assign("http://localhost:3000/inicio#")        
     }else{
        alert('Usuario o Contraseña incorrectos', 'danger')
     }    
}
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} mt-5 alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }