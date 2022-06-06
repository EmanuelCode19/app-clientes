const getParam = (param) => {
  const parametro = new URLSearchParams(location.search);
  return parametro.get(param);
};

window.addEventListener("load", async () => {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} mt-5 alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };
  const id = getParam("id");

  const detalles = document.querySelector('#detail-clientes');

  const response = await fetch(`http://localhost:9000/api/client/${id}`);

  const message = await response.json();


  const url = `http://localhost:9000/api/message`;
  const mesj = await fetch(url);
const msj = await mesj.json();
  console.log({ msj });
  const msjFiltered = msj.filter(
    (msj) => msj.name === message.name
  );
  console.log({ msjFiltered });
  if (! msjFiltered.length) {
    alert("no se interactuo con el cliente", "danger");
  }

  const messageHTML= msjFiltered.reduce((acc,msj) => acc + `
  <div class="mt-5">
    <div class="flex-row">
    
    <p class="color-black cliente-info"> <span> De: </span>  ${msj.user.name} </p>
    <p class="color-black cliente-info"> <span> Para: </span>  ${msj.name} </p>
    
    </div>

    <div class="flex-row">
    
    <p class="color-black cliente-info"> <span>mensaje:</span>  ${msj.message}</p>
    <p class="color-black cliente-info"><span>Fecha:</span>${new Date(msj.createAd).toISOString().split('T')[0]}</p>
    
    </div>
  
   
  </div>`,'')


  detalles.innerHTML = messageHTML;

});
