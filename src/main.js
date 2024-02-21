import refs from "./js/refs";

import getData from "./js/helpers/get-data";

import addItem from './js/add-item';

import { nanoid } from "nanoid";

import renderItem from "./js/render-item";

import './js/remove-item';

const { cart, form, mainTitle, clearButton } = refs;



//////////// функція для відображення кошика ////////////

function renderCart() {
	if (!getData('cart').length) {
		cart.innerHTML = '';
		return;
	}
	cart.innerHTML = '';
	const cartContent = getData('cart');
	cartContent.forEach(product => renderItem(product.name, product.id));
}

//////////// функція для очистки кошика ////////////

function resetCart() {
	localStorage.removeItemLS('cart');
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
    const id = nanoid();
	const productName = form.elements.taskName.value.trim();

	addItem(productName, id);
	renderItem(productName, id);
	form.reset();
});

clearButton.addEventListener('click', resetCart);

renderCart();
