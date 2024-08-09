document.getElementById('product-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const productId = document.getElementById('product-id').value;

    // Simulate fetching data from the blockchain
    const productInfo = await fetchProductInfo(productId);

    displayProductInfo(productInfo);
});

async function fetchProductInfo(productId) {
    // This function should interact with your smart contract to get the product information
    // For now, let's simulate it with a simple object
    return {
        id: productId,
        name: "Sample Medicine",
        manufacturer: "Pharma Inc.",
        batch: "A12345",
        status: "Authentic",
        location: "Warehouse 3"
    };
}

function displayProductInfo(info) {
    const productInfoDiv = document.getElementById('product-info');
    productInfoDiv.innerHTML = `
        <p><strong>Product ID:</strong> ${info.id}</p>
        <p><strong>Name:</strong> ${info.name}</p>
        <p><strong>Manufacturer:</strong> ${info.manufacturer}</p>
        <p><strong>Batch:</strong> ${info.batch}</p>
        <p><strong>Status:</strong> ${info.status}</p>
        <p><strong>Current Location:</strong> ${info.location}</p>
    `;
}
