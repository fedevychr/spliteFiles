import { nanoid } from 'nanoid'

import getData from './helpers/get-data';

import setDataLS from './helpers/set-data-ls';

export default function addItem(product) {
	const productObj = {
		id: nanoid(),
		name: product,
	};

	const cartContent = getData('cart');
	cartContent.push(productObj);
    setDataLS('cart', cartContent);
}

