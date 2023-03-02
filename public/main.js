const button = document.querySelector('#like');
const getBtn = document.querySelector('#getstuff');
const heading = document.querySelector('h1');
const image = document.querySelector('img')

// let baseURL = 'http://localhost:4000'


button.addEventListener('click', (event) => {
    alert("YOU LOVE THIS PAGE");
    axios.get(`/image`)
    .then(response => {
        let newImage = response.data;
        image.src = newImage;
    }).catch(err => console.log(err))
})

const getStuff = event => {
    axios.get(`/stuff`)
    .then(response => {
        let newHeading = response.data;
        heading.textContent = newHeading;
    }).catch(err => console.log(err))
}


getBtn.addEventListener('click', getStuff)