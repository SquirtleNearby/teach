import { resolve } from 'path';

const pageData = {
    '/index.html': {
        title: 'Main Page',
    },
    '/contacts.html': {
        title: 'Sub Page',
    },
};

export default {
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'partials'),
        context(pagePath) {
            return pageData[pagePath];
        }
    })],
};

