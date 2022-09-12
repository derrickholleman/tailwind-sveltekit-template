import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            // these are the aliases and paths to them
            $lib: path.resolve('./src/lib'),
        },
    },
};

export default config;
