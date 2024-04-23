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
        'Browse': 'Browse our listings and find what you\'re looking for.',
        'Craigslist': 'Craigslist is a classified advertisements website with sections devoted to jobs, housing, personals, for sale, items wanted, services, community, gigs, résumés, and discussion forums.',
        'Founded': 'Founded in 1995 by Craig Newmark, Craigslist has grown to become one of the most popular websites for classified listings, with millions of users posting and browsing listings every day.'
    },
    'es': {
        'Welcome': '¡Bienvenido a Craigslist!',
        'browse': 'Explora nuestros anuncios y encuentra lo que buscas.'
    }
}
function changeLanguage(language) {
    const elements = document.queryselectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if(languageStrings[language] && languageStrings[language][key]) {
            element.textContent = languageStrings[language][key];
        }
    });
}
