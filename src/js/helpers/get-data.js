export default function getData(key) {
	return JSON.parse(localStorage.getItem(key)) || [];
}