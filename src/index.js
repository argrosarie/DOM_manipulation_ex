
const NASA_KEY = '8XggmCElQV57ZjYJkKNbbm9Xw3GXdfMHURVpmINu';
const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

const appNode = document.querySelector("#app");

window
.fetch(url)
.then(response => response.json())
.then((responseJson) => {
    const allTheItems = []
        const image = document.createElement('img');
        image.src = responseJson.hdurl;
        image.className = 'w-1/2 h-full mx-auto';

        const title = document.createElement('h2');
        title.textContent = responseJson.title;
        title.className = "text-2xl text-black my-3"

        const date = document.createElement('div');
        date.textContent = responseJson.date;
        date.className = "my-1";

        const descriptionTitle = document.createElement('p');
        descriptionTitle.textContent = "Description";
        descriptionTitle.className = "text-black mb-1 text-2xl";

        const description = document.createElement('div');
        description.textContent = responseJson.explanation;
        description.className = 'text-gray-500 leading-relaxed';

        const container = document.createElement('div');
        container.append(image, title, date, descriptionTitle, description);
        container.className = "mt-4 p-2 h-full flex flex-col justify-center";
        allTheItems.push(container);

    appNode.append(...allTheItems);
})