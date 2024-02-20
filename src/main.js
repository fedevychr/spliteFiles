
import refs from "./js/refs";

import getData from "./js/helpers/get-data";

import addItem from './js/add-item';

const { cart, form, mainTitle, clearButton } = refs;




//////////// функція для видалення товару з бази даних ////////////

function removeItem(buttonID) {
	localStorage.setItem(
		'cart',
		JSON.stringify(getData('cart').filter(product => product.id !== buttonID)),
	);
}

//////////// функція для відображення доданого товару у кошику ////////////

function renderItem(product) {
	const productElement = document.createElement('li');
	setTimeout(() => {
		productElement.classList.toggle('rendered');
	}, 250);
	productElement.textContent = product;

	const removeButton = document.createElement('button');
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute(
		'data-id',
		`${getData('cart').findLast(x => x.name === product).id}`,
	);
	removeButton.textContent = 'Видалити';

	removeButton.addEventListener('click', e => {
		productElement.classList.toggle('rendered');
		setTimeout(() => {
			removeItem(e.target.dataset.id);
			cart.removeChild(e.target.parentElement);
		}, 160);
	});

	productElement.appendChild(removeButton);
	cart.appendChild(productElement);
}

//////////// функція для відображення кошика ////////////

function renderCart() {
	if (!getData('cart').length) {
		cart.innerHTML = '';
		return;
	}
	cart.innerHTML = '';
	const cartContent = getData('cart');
	cartContent.forEach(product => renderItem(product.name));
}

//////////// функція для очистки кошика ////////////

function resetCart() {
	localStorage.removeItem('cart');
	renderCart();
}

/////////////////////////////////////////////////////////////////////////////////////



mainTitle.textContent = 'Мій кошик:';
form.before(mainTitle);
clearButton.classList.add('js-clear-button');
clearButton.setAttribute('type', 'button');
clearButton.textContent = 'Очистити кошик';
form.append(clearButton);

form.addEventListener('submit', e => {
	e.preventDefault();
	if (!form.elements.taskName.value.trim()) {
		form.reset();
		return;
	}

	const productName = form.elements.taskName.value.trim();

	addItem(productName);
	renderItem(productName);
	form.reset();
});

clearButton.addEventListener('click', resetCart);

renderCart();
