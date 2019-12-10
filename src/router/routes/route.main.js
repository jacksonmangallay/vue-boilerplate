import { loadView } from '@/utils/dynamic-import';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: loadView('Home')
    }
]

export default routes;