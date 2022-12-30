const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector("#app");
const formatPrice = (price) => {
   const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
}).format(price)

    return newPrice;
}


window
.fetch(`${baseUrl}/api/avo`)
.then(response => response.json())
.then((responseJson) => {
    const allTheItems = []
    responseJson.data.forEach((item) => {
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;

        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-2xl text-red-600"
        // title.style.fontSize = "3rem"

        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);

        const container = document.createElement('div');
        container.append(image, title, price);
        allTheItems.push(container);
    });
    appNode.append(...allTheItems);
})