const API_KEY = 'mKkiV1j94VihaY2hGsJFfmSwohI';
const API_URL = 'https://ci-jshint.herokuapp.com/api';
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

async function getStatus(e){
    /**
     * Makes a GET request to the API_URL with the API_KEY.
     * It passes this data to a function that will display it.
     */
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();

    if (response.ok){
        displayStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(e){
    /**
     * Displays the status of the request made in the getStatus function
     * in a model.
     */
}