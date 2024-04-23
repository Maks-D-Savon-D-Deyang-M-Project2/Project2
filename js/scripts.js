function login() {
  document.getElementById("login");
  alert("Successfully logged in.");
}

function signup() {
  document.getElementById("signup");
  alert("Account Created. Thank you!");
}

function changeCity(cityCode) {
    var cityNameElement = document.getElementById('cityname');
    switch(cityCode) {
        case 'chc':
            cityNameElement.textContent = 'Chicago';
            break;
        case 'nch':
            cityNameElement.textContent = 'North Chicagoland';
            break;
        case 'wcl':
            cityNameElement.textContent = 'West Chicagoland';
            break;
        case 'sox':
            cityNameElement.textContent = 'South Chicagoland';
            break;
        case 'nwi':
            cityNameElement.textContent = 'Northwest Indiana';
            break;
        case 'nwc':
            cityNameElement.textContent = 'Northwest Suburbs';
            break;
        default:
            break;
    }
}
const languageStrings = {
    'en': {
        'Welcome': 'Welcome to Craigslist!',
        'Browse': 'Browse our listings and find what you\'re looking for.'
    },
    'es': {
        'Welcome': '¡Bienvenido a Craigslist!',
        'browse': 'Explora nuestros anuncios y encuentra lo que buscas.'
    }
}
function changeLanguage(language) {
    const elements = document.queryselectorAll('[data-translate]');
}
