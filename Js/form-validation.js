// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



//funcion estado del pedido
function status () {
  var numPedido =
   document.getElementById("numPedido").value
   var message = "<p>Estado del pedido " + numPedido +  ": ENVIADO </p>" + "<p>Fecha: 20/Marzo/2023 | Productos: El quinto día | Total: $150</p>";

  document
  .getElementById("detalles")
  .innerHTML = message;


}

