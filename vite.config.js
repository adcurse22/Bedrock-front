import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            assets: '/src/assets',
            shared: '/src/shared',
            pages: '/src/pages',
            widgets: '/src/widgets',
            app: '/src/app',
            entities: '/src/entities',
            utils: '/src/utils'
        }
    }

});
