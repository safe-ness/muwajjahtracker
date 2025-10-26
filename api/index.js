const GOOGLE_API_URL='AKfycbxrESsKI3IPfH40b8EJzjE97mVuOJm0yt55yUo44J53y5FX7097LPPEkclon0Bualk6Xw'


async function getData(jsonfile) {
    const getJson = fetch(jsonfile)
    try {
        const res = await getJson;

        if (!res.ok) { throw new Error(`Resource not found: ${res.status}`) }
        const data = await res.json();
        return data;
    } catch(error) {
        console.error( `Error getting data: ${error}`)
        return [];
    }
}

async function makeList() {
    const collection = await getData('./api/data/santri.json')

    if (!Array.isArray(collection) || collection.length == 0) {
        console.log('Data empty or not found!');
        return;
    }

    const listedData = _.map(collection, 'nama')
    const ul = document.createElement('ul')
    listedData.forEach(nama => {
        const li = document.createElement('li')
        li.textContent = nama;
        ul.appendChild(li)
    });
    document.body.appendChild(ul)
}

async function updateDataToSpreadsheet(params) {
    
}