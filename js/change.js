document.addEventListener('DOMContentLoaded', function() {
    let currentDiv = 1; // Inicialmente, el div 1 es el activo

    function showDiv() {
        // Oculta todos los divs
        document.querySelectorAll('.content').forEach(div => {
            div.classList.remove('active');
        });

        // Muestra el div actual
        document.getElementById('div' + currentDiv).classList.add('active');

        // Incrementa el índice del div o reinícialo si llega al último
        currentDiv = (currentDiv % 4) + 1; // Aquí 3 es el número total de divs
    }

    // Llama a la función showDiv cada 3 segundos (3000 milisegundos)
    setInterval(showDiv, 3000);
});
