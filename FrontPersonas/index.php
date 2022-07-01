<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script>
  function addPersonas(){
    let rut = document.getElementById('rut').value;
    let nombre = document.getElementById('nombre').value;
    let mutation = `
        mutation miMutacion($input: PersonaInput) {
            addPersona(input: $input){
                id
                rut
                nombre
            }
        }
    `;
    $.ajax({
        type: "POST",
        url: "http//localhost:8090/graphql",
        contentType:"application/json",
        timeout:15000,
        data: JSON,stringify({
            query: mutation,
            variables:{
                input: {
                    rut: rut,
                    nombre: nombre
                }
            }
        }),
        success: function(response){
            alert(response.data.addProducto.id);
        }
    });
  };
  </script>
</head>
<body>

<div class="container mt-3">
  <h2>Agregar Persona</h2>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="rut">RUT:</label>
      <input type="text" class="form-control" id="rut" name="rut">
    </div>
    <div class="mb-3"> 
      <label for="nombre">NOMBRE:</label>
      <input type="text" class="form-control" id="nombre" name="nombre">
    </div> 
    <button type="button" onclick="addPersonas();" class="btn btn-primary">Agregar</button>
  </form>
</div>

</body>
</html>
