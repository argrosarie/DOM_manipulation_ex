
const NASA_KEY = '8XggmCElQV57ZjYJkKNbbm9Xw3GXdfMHURVpmINu';
const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

const appNode = document.querySelector("#app");

const formatPrice = (price) => {
   const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
}).format(price)
    return newPrice;
}


window
.fetch(url)
.then(response => response.json())
.then((responseJson) => {
    const allTheItems = []
    // responseJson.data.forEach(item => {
        const image = document.createElement('img');
        // image.src = `${baseUrl}${item.image}`;
        image.src = responseJson.hdurl;
        image.className = 'w-64'

        const title = document.createElement('h2');
        title.textContent = responseJson.title;
        title.className = "text-2xl text-red-600"
        // title.style.fontSize = "3rem"

        // const price = document.createElement('div');
        // price.textContent = formatPrice(item.price);
        const date = document.createElement('div');
        date.textContent = responseJson.date
        date.className = " ";

        const description = document.createElement('div');
        description.textContent = responseJson.explanation;
        description.className = ' ';

        const container = document.createElement('div');
        container.append(image, title, date, description);
        allTheItems.push(container);
        
    // }
    // );
    appNode.append(...allTheItems);
})