

const BASE_URL = `https://vtu.ng/wp-json/api/v1/`

fetch(BASE_URL)
.then(res => res.json())
.then(data => {
	console.log(data)
})