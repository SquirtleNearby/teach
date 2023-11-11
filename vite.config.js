import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

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

