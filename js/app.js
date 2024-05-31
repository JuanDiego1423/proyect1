document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultsList = document.getElementById('results-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search').value;
        searchBooks(query);
    });

    function searchBooks(query) {
        // Simulación de búsqueda de libros (en una aplicación real, harías una solicitud a tu backend)
        const books = [
            { title: 'El Quijote', author: 'Miguel de Cervantes', genre: 'Novela' },
            { title: 'Cien años de soledad', author: 'Gabriel García Márquez', genre: 'Novela' },
            { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', genre: 'Novela' },
            { title: '1984', author: 'George Orwell', genre: 'Distopía' },
            { title: 'Orgullo y prejuicio', author: 'Jane Austen', genre: 'Romance' },
            { title: 'Matar a un ruiseñor', author: 'Harper Lee', genre: 'Ficción' },
            { title: 'La Odisea', author: 'Homero', genre: 'Épica' },
            { title: 'Hamlet', author: 'William Shakespeare', genre: 'Tragedia' },
            { title: 'En busca del tiempo perdido', author: 'Marcel Proust', genre: 'Ficción' },
            { title: 'Crimen y castigo', author: 'Fiódor Dostoyevski', genre: 'Novela' },
            { title: 'Guerra y paz', author: 'León Tolstói', genre: 'Novela' },
            { title: 'El gran Gatsby', author: 'F. Scott Fitzgerald', genre: 'Novela' },
            { title: 'Los hermanos Karamazov', author: 'Fiódor Dostoyevski', genre: 'Novela' },
            { title: 'Ulises', author: 'James Joyce', genre: 'Ficción' },
            { title: 'El guardián entre el centeno', author: 'J.D. Salinger', genre: 'Ficción' },
            { title: 'La divina comedia', author: 'Dante Alighieri', genre: 'Épica' },
            { title: 'El nombre de la rosa', author: 'Umberto Eco', genre: 'Misterio' },
            { title: 'Cien años de soledad', author: 'Gabriel García Márquez', genre: 'Realismo mágico' },
            { title: 'La metamorfosis', author: 'Franz Kafka', genre: 'Ficción' },
            { title: 'El proceso', author: 'Franz Kafka', genre: 'Ficción' },
            { title: 'Anna Karenina', author: 'León Tolstói', genre: 'Novela' },
            { title: 'Madame Bovary', author: 'Gustave Flaubert', genre: 'Novela' },
            { title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Distopía' },
            { title: 'El retrato de Dorian Gray', author: 'Oscar Wilde', genre: 'Ficción' },
            { title: 'El señor de los anillos', author: 'J.R.R. Tolkien', genre: 'Fantasía' },
            { title: 'Alicia en el país de las maravillas', author: 'Lewis Carroll', genre: 'Fantasía' },
            { title: 'Cumbres Borrascosas', author: 'Emily Brontë', genre: 'Novela' },
            { title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Novela' },
            { title: 'Drácula', author: 'Bram Stoker', genre: 'Horror' },
            { title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
            { title: 'El principito', author: 'Antoine de Saint-Exupéry', genre: 'Fábula' },
            { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Aventura' },
            { title: 'El conde de Montecristo', author: 'Alexandre Dumas', genre: 'Aventura' },
            { title: 'Los miserables', author: 'Victor Hugo', genre: 'Novela' }
        ];

        // Filtrar libros que coincidan con la consulta
        const results = books.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.genre.toLowerCase().includes(query.toLowerCase())
        );

        // Mostrar resultados
        resultsList.innerHTML = '';
        if (results.length > 0) {
            results.forEach(book => {
                const listItem = document.createElement('li');
                listItem.textContent = `${book.title} - ${book.author} (${book.genre})`;
                resultsList.appendChild(listItem);
            });
        } else {
            resultsList.innerHTML = '<li>No se encontraron resultados.</li>';
        }
    }
});