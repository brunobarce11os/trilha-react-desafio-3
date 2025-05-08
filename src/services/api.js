import axios from 'axios';

const api = axios.create({
    baseURL: 'https://didactic-space-orbit-g4777wgr7jgv3wjr6-8001.app.github.dev/'
});

export { api }