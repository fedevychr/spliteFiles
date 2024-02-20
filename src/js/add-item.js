import getData from './helpers/get-data';

import setDataLS from './helpers/set-data-ls';

export default function addItem(product, id) {
	const productObj = {
		id,
		name: product,
	};

	const cartContent = getData('cart');
	cartContent.push(productObj);
    setDataLS('cart', cartContent);
}

