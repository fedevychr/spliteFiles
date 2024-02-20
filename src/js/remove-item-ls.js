import getData from "./helpers/get-data";

import setDataLS from "./helpers/set-data-ls";

export default function removeItemLS(buttonID) {
    const data = getData('cart');
    const filteredData = data.filter(product => product.id !== buttonID);

    setDataLS('cart', filteredData);
}