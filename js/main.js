document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Usar FormData para manejar imágenes

    const response = await fetch('/posts', {
        method: 'POST',
        body: formData, // No necesitas headers con FormData
    });

    if (response.ok) {
        alert('Publicación creada con éxito');
        loadPosts(); // Recargar las publicaciones
    } else {
        alert('Error creando la publicación');
    }
});

// Función para cargar y mostrar las publicaciones
async function loadPosts() {
    const response = await fetch('/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Limpiar el contenedor

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.titulo}</h2>
            <p>${post.descripcion}</p>
            ${post.imagen ? `<img src="${post.imagen}" alt="${post.titulo}" style="max-width: 100%;">` : ''}
            <small>Publicado el: ${new Date(post.createdAt).toLocaleString()}</small>
            <button onclick="deletePost('${post.id}')">Eliminar</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Función para eliminar una publicación
async function deletePost(id) {
    const response = await fetch(`/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert('Publicación eliminada');
        loadPosts(); // Recargar las publicaciones
    } else {
        alert('Error eliminando la publicación');
    }
}

// Cargar las publicaciones al iniciar la página
loadPosts();