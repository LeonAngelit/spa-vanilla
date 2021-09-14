import Header from '../templates/Header';
import Home from '../pages/home';
import Character from '../pages/Character';
import Error404 from '../templates/Error404';
import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async() =>{
    const header = null || document.getElementById('headerid');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    console.log(hash);
    console.log(hash.length);
    let route = await resolveRoute(hash);
    console.log(route);
    let render = routes[route] ? routes[route]() : Error404();
    content.innerHTML = await render;
}

export default router;