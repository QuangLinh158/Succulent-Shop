import Home from "../pages/Home";
import Products from './../pages/Products';
import News from './../pages/News';
import Helps from './../pages/Helps';
import ProductDetail from "../pages/ProductDetail";

const Routers = [
    {path:"", component: <Home/>},
    {path:"home", component: <Home/>},
    {path:"products", component: <Products/>},
    {path:"products/:id", component: <ProductDetail/>},
    {path:"news", component: <News/>},
    {path:"helps", component: <Helps/>},

];

export default Routers;