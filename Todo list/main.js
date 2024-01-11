const button = document.querySelector('.btn input');
const field = document.querySelector('.field input');
const list = document.querySelector('.list ul');

button.addEventListener('click', () => {
    if (field.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${field.value} <span class="del">Удалить</span>`;
        list.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('active');
        });

        const deleteButton = li.querySelector('.del');
        deleteButton.addEventListener('click', () => {
            li.style.display = 'none';
        });

        field.value = '';
    } else {
        alert('Пустая строка');
    }
});
