import refs from "./refs";

const { cart } = refs;

export default function renderItem(product, id) {
	const productElement = document.createElement('li');
	setTimeout(() => {
		productElement.classList.toggle('rendered');
	}, 250);
	productElement.textContent = product;

    const removeButton = document.createElement('button');
    console.log(id);
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute('data-id', id,);
	removeButton.textContent = 'Видалити';

	productElement.appendChild(removeButton);
	cart.appendChild(productElement);
}