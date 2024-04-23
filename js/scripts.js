const languageStrings = {
    'en': {
        'Welcome': 'Welcome to Craigslist!',
        'Browse': 'Browse our listings and find what you\'re looking for.',
        'Craigslist': 'Craigslist is a classified advertisements website with sections devoted to jobs, housing, personals, for sale, items wanted, services, community, gigs, résumés, and discussion forums.',
        'Founded': 'Founded in 1995 by Craig Newmark, Craigslist has grown to become one of the most popular websites for classified listings, with millions of users posting and browsing listings every day.',
        'Help': 'help',
        'Sitemap': 'sitemap',
        'Saftey': 'safety',
        'Terms': 'terms',
        'About': 'about',
        'january': 'January',
        'february': 'February',
        'march': 'March',
        'april': 'April',
        'may': 'May',
        'june': 'June',
        'july': 'July',
        'august': 'August',
        'september': 'September',
        'october': 'October',
        'november': 'November',
        'december': 'December',
        'sun': 'Sun',
        'mon': 'Mon',
        'tue': 'Tue',
        'wed': 'Wed',
        'thu': 'Thu',
        'fri': 'Fri',
        'sat': 'Sat'
    },
    'es': {
        'Welcome': '¡Bienvenido a Craigslist!',
        'Browse': 'Explora nuestros anuncios y encuentra lo que buscas.',
        'Craigslist': 'Craigslist es un sitio web de anuncios clasificados con secciones dedicadas a empleos, vivienda, contactos personales, venta, artículos buscados, servicios, comunidad, conciertos, currículums y foros de discusión.',
        'Founded': 'Fundada en 1995 por Craig Newmark, Craigslist ha crecido hasta convertirse en uno de los sitios web más populares para anuncios clasificados, con millones de usuarios publicando y explorando anuncios todos los días.',
        'Help': 'ayuda',
        'Sitemap': 'Mapa del sitio',
        'Saftey': 'Seguridad',
        'Terms': 'Terminos',
        'About': 'acerca de',
        'january': 'Enero',
        'february': 'Febrero',
        'march': 'Marzo',
        'april': 'Abril',
        'may': 'Mayo',
        'june': 'Junio',
        'july': 'Julio',
        'august': 'Agosto',
        'september': 'Septiembre',
        'october': 'Octubre',
        'november': 'Noviembre',
        'december': 'Diciembre',
        'sun': 'Dom',
        'mon': 'Lun',
        'tue': 'Mar',
        'wed': 'Mié',
        'thu': 'Jue',
        'fri': 'Vie',
        'sat': 'Sáb'
    }
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if(languageStrings[language] && languageStrings[language][key]) {
            element.textContent = languageStrings[language][key];
        }
    });
}

// Add event listeners to language links
document.addEventListener('DOMContentLoaded', function() {
    const languageLinks = document.querySelectorAll('.dropdown-content a');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const language = this.getAttribute('onclick').split("'")[1];
            changeLanguage(language);
        });
    });
});