Challenge Amigo Secreto

Paso 1 Crear un array para almacenar los nombres Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
Ejemplo: let amigos = []

Paso 2 Implementa una función para agregar amigos Implementa una función para agregar amigos Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Tareas específicas:
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

Paso 3: Implementa una función para actualizar la lista de amigos Crea una función que recorra el array amigos y agregue cada nombre como un elemento dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
Tareas específicas:
Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista () para cada título.
Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

Paos 4: Implementa una función para sortear los amigos
Descripción Editar Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
Tareas específicas:
Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
