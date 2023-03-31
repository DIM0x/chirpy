const resource = [
    /* --- CSS --- */
    '/chirpy/docs/assets/css/style.css',

    /* --- PWA --- */
    '/chirpy/docs/app.js',
    '/chirpy/docs/sw.js',

    /* --- HTML --- */
    '/chirpy/docs/index.html',
    '/chirpy/docs/404.html',

    
        '/chirpy/docs/categories/',
    
        '/chirpy/docs/tags/',
    
        '/chirpy/docs/archives/',
    
        '/chirpy/docs/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/chirpy/docs/assets/img/favicons/android-chrome-192x192.png',
        '/chirpy/docs/assets/img/favicons/android-chrome-512x512.png',
        '/chirpy/docs/assets/img/favicons/apple-touch-icon.png',
        '/chirpy/docs/assets/img/favicons/favicon-16x16.png',
        '/chirpy/docs/assets/img/favicons/favicon-32x32.png',
        '/chirpy/docs/assets/img/favicons/favicon.ico',
        '/chirpy/docs/assets/img/favicons/mstile-150x150.png',
        '/chirpy/docs/assets/img/favicons/safari-pinned-tab.svg',
        '/chirpy/docs/assets/js/dist/categories.min.js',
        '/chirpy/docs/assets/js/dist/commons.min.js',
        '/chirpy/docs/assets/js/dist/home.min.js',
        '/chirpy/docs/assets/js/dist/misc.min.js',
        '/chirpy/docs/assets/js/dist/page.min.js',
        '/chirpy/docs/assets/js/dist/post.min.js',
        '/chirpy/docs/assets/js/dist/pvreport.min.js'
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

