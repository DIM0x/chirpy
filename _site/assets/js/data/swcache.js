const resource = [
    /* --- CSS --- */
    '/chirpy/assets/css/style.css',

    /* --- PWA --- */
    '/chirpy/app.js',
    '/chirpy/sw.js',

    /* --- HTML --- */
    '/chirpy/index.html',
    '/chirpy/404.html',

    
        '/chirpy/categories/',
    
        '/chirpy/tags/',
    
        '/chirpy/archives/',
    
        '/chirpy/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/chirpy/assets/img/favicons/android-chrome-192x192.png',
        '/chirpy/assets/img/favicons/android-chrome-512x512.png',
        '/chirpy/assets/img/favicons/apple-touch-icon.png',
        '/chirpy/assets/img/favicons/favicon-16x16.png',
        '/chirpy/assets/img/favicons/favicon-32x32.png',
        '/chirpy/assets/img/favicons/favicon.ico',
        '/chirpy/assets/img/favicons/mstile-150x150.png',
        '/chirpy/assets/img/favicons/safari-pinned-tab.svg',
        '/chirpy/assets/js/dist/categories.min.js',
        '/chirpy/assets/js/dist/commons.min.js',
        '/chirpy/assets/js/dist/home.min.js',
        '/chirpy/assets/js/dist/misc.min.js',
        '/chirpy/assets/js/dist/page.min.js',
        '/chirpy/assets/js/dist/post.min.js',
        '/chirpy/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'dim0x.github.io',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

