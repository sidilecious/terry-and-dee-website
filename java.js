const adminCredentials = {
    "sidievaton@gmail.com": "Evatonsidi40.",
    "terryanddee@gmail.com": "1234",
    "dee@gmail.com": "5678"
};

// Admin Login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (adminCredentials[email] === password) {
        document.getElementById('admin-login-section').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
    } else {
        alert("Invalid credentials!");
    }
});

// Upload Product
function uploadProduct() {
    const productImageInput = document.getElementById('product-image');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');

    const imageFile = productImageInput.files[0];
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;

    if (imageFile && productName && productPrice) {
        const imageURL = URL.createObjectURL(imageFile);

        const productContainer = document.querySelector('.product-gallery');
        const newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.innerHTML = `
            <img src="${imageURL}" alt="${productName}">
            <h3>${productName}</h3>
            <p>Price: KES ${productPrice}</p>
            <p class="product-contact">Contact us for inquiries: 0104785294</p>
        `;

        productContainer.appendChild(newProduct);

        // Reset fields
        productImageInput.value = '';
        productNameInput.value = '';
        productPriceInput.value = '';
    } else {
        alert('Please fill all fields and upload an image.');
    }
}

// Admin Video Upload (Admin Only)
document.getElementById('upload-video-button')?.addEventListener('click', function() {
    const videoLink = document.getElementById('video-link').value;
    if (videoLink) {
        const videoPanel = document.getElementById('video-panel');
        const videoEmbed = document.createElement('iframe');
        videoEmbed.src = `https://www.youtube.com/embed/${getYouTubeVideoId(videoLink)}`;
        videoPanel.appendChild(videoEmbed);
    } else {
        alert('Please enter a valid YouTube video link.');
    }
});

// Extract YouTube Video ID
function getYouTubeVideoId(url) {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:v|e(?:mbed)?)\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
}

// Hide splash screen after 3 seconds with fade-out effect
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.transition = "opacity 1s";
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.display = "none";
        }, 1000);
    }, 3000);
});

// Form validation for upload button (disable until all fields are filled)
document.getElementById('product-image')?.addEventListener('change', checkFormCompletion);
document.getElementById('product-name')?.addEventListener('input', checkFormCompletion);
document.getElementById('product-price')?.addEventListener('input', checkFormCompletion);

function checkFormCompletion() {
    const productImageInput = document.getElementById('product-image');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const uploadButton = document.getElementById('upload-button');

    const isFormComplete = productImageInput.files[0] && productNameInput.value && productPriceInput.value;
    if (uploadButton) {
        uploadButton.disabled = !isFormComplete;
    }
}
const adminCredentials = {
    "sidievaton@gmail.com": "Evatonsidi40.",
    "terryanddee@gmail.com": "1234",
    "dee@gmail.com": "5678"
};

// Admin Login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (adminCredentials[email] === password) {
        document.getElementById('admin-login-section').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
    } else {
        alert("Invalid credentials!");
    }
});

// Upload Product
function uploadProduct() {
    const productImageInput = document.getElementById('product-image');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');

    const imageFile = productImageInput.files[0];
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;

    if (imageFile && productName && productPrice) {
        const imageURL = URL.createObjectURL(imageFile);

        const productContainer = document.querySelector('.product-gallery');
        const newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.innerHTML = `
            <img src="${imageURL}" alt="${productName}">
            <h3>${productName}</h3>
            <p>Price: KES ${productPrice}</p>
            <p class="product-contact">Contact us for inquiries: 0104785294</p>
        `;

        productContainer.appendChild(newProduct);

        // Reset fields
        productImageInput.value = '';
        productNameInput.value = '';
        productPriceInput.value = '';
    } else {
        alert('Please fill all fields and upload an image.');
    }
}

// Admin Video Upload (Admin Only)
document.getElementById('upload-video-button')?.addEventListener('click', function() {
    const videoLink = document.getElementById('video-link').value;
    if (videoLink) {
        const videoPanel = document.getElementById('video-panel');
        const videoEmbed = document.createElement('iframe');
        videoEmbed.src = `https://www.youtube.com/embed/${getYouTubeVideoId(videoLink)}`;
        videoPanel.appendChild(videoEmbed);
    } else {
        alert('Please enter a valid YouTube video link.');
    }
});

// Extract YouTube Video ID
function getYouTubeVideoId(url) {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:v|e(?:mbed)?)\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
}

// Hide splash screen after 3 seconds with fade-out effect
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.transition = "opacity 1s";
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.style.display = "none";
        }, 1000);
    }, 3000);
});

// Form validation for upload button (disable until all fields are filled)
document.getElementById('product-image')?.addEventListener('change', checkFormCompletion);
document.getElementById('product-name')?.addEventListener('input', checkFormCompletion);
document.getElementById('product-price')?.addEventListener('input', checkFormCompletion);

function checkFormCompletion() {
    const productImageInput = document.getElementById('product-image');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const uploadButton = document.getElementById('upload-button');

    const isFormComplete = productImageInput.files[0] && productNameInput.value && productPriceInput.value;
    if (uploadButton) {
        uploadButton.disabled = !isFormComplete;
    }
}
