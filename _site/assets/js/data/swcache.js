const resource = [
    /* --- CSS --- */
    '/chirpy/_site/assets/css/style.css',

    /* --- PWA --- */
    '/chirpy/_site/app.js',
    '/chirpy/_site/sw.js',

    /* --- HTML --- */
    '/chirpy/_site/index.html',
    '/chirpy/_site/404.html',

    
        '/chirpy/_site/categories/',
    
        '/chirpy/_site/tags/',
    
        '/chirpy/_site/archives/',
    
        '/chirpy/_site/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/chirpy/_site/assets/img/favicons/android-chrome-192x192.png',
        '/chirpy/_site/assets/img/favicons/android-chrome-512x512.png',
        '/chirpy/_site/assets/img/favicons/apple-touch-icon.png',
        '/chirpy/_site/assets/img/favicons/favicon-16x16.png',
        '/chirpy/_site/assets/img/favicons/favicon-32x32.png',
        '/chirpy/_site/assets/img/favicons/favicon.ico',
        '/chirpy/_site/assets/img/favicons/mstile-150x150.png',
        '/chirpy/_site/assets/img/favicons/safari-pinned-tab.svg',
        '/chirpy/_site/assets/js/dist/categories.min.js',
        '/chirpy/_site/assets/js/dist/commons.min.js',
        '/chirpy/_site/assets/js/dist/home.min.js',
        '/chirpy/_site/assets/js/dist/misc.min.js',
        '/chirpy/_site/assets/js/dist/page.min.js',
        '/chirpy/_site/assets/js/dist/post.min.js',
        '/chirpy/_site/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

