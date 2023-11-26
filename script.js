// Función para mostrar sugerencias
function showHint(searchTerm) {
    // Aquí puedes realizar lógica para obtener sugerencias según el término de búsqueda
    // Por ahora, simplemente mostraremos el término de búsqueda en el div de sugerencias
    var hintElement = document.getElementById('searchHint');
    hintElement.textContent = 'Estás escribiendo: ' + searchTerm;
}

document.addEventListener('DOMContentLoaded', function() {
    // Agregar un evento de escucha al formulario
    var searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // Prevenir el envío del formulario (evitar que la página se recargue)
            event.preventDefault();

            // Obtener el término de búsqueda
            var searchTerm = document.getElementById('searchInput').value;

            // Aquí deberías realizar una acción de búsqueda
            // Por ahora, simplemente mostraremos los resultados en la consola
            console.log('Realizar búsqueda con término: ' + searchTerm);

            // Limpia el campo de búsqueda después de realizar la búsqueda (opcional)
            document.getElementById('searchInput').value = '';
        });
    }

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block' && !event.target.matches('.dropbtn')) {
                openDropdown.style.display = 'none';
            }
        }
    });
});
