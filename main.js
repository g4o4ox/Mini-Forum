document.addEventListener('DOMContentLoaded', () => {
    const titlepost = document.getElementById('title');
    const contentpost = document.getElementById('content');
    const postbutton = document.getElementById('public-button');
    const postsContainer = document.getElementById('post-content');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    function exibirpostagem() {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${index})">Excluir</button>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function addPost() {
        const title = titlepost.value.trim();
        const content = contentpost.value.trim();

        if (title && content) {
            posts.push({ title, content });
            localStorage.setItem('posts', JSON.stringify(posts));
            exibirpostagem();
            titlepost.value = '';
            contentpost.value = '';
        } 
    }

    function deletePost(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        exibirpostagem();
    }

    postbutton.addEventListener('click', addPost);
    exibirpostagem();
});
