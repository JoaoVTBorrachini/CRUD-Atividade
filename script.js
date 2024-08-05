document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const itemInput = document.getElementById('item-input');
    const valueInput = document.getElementById('value-input');

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(itemInput.value);
        itemInput.value = '';
        valueInput.value = '';
    });

    itemList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            editItem(e.target);
        } else if (e.target.classList.contains('delete')) {
            deleteItem(e.target);
        }
    });

    function addItem(item) {
        const li = document.createElement('li');
        let preco = valueInput.value;
        li.innerHTML = `
            <span class="item">Item: ${item}</span>
            <span class="valor"> Valor: R$${preco}</span>
            <div>
                <button class="edit">Editar</button>
                <button class="delete">Excluir</button>
            </div>
        `;
        itemList.appendChild(li);
    }

    function editItem(button) {
        const li = button.parentElement.parentElement;
        const span = li.querySelector('.item');
        const spanV = li.querySelector('.preco');
        const newValue = prompt('Editar item', span.textContent);
        if (newValue) {
            span.textContent = newValue;
        }
    }

    function deleteItem(button) {
        const li = button.parentElement.parentElement;
        itemList.removeChild(li);
    }
});
