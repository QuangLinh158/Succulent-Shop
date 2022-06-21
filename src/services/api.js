import axios from "axios";
// import store from './../store/index';
// import { hideLoading, showLoading } from "react-redux-loading-bar";
//đầu tiên tạo api

//1-api.tạo đường dẫn
const url = {
    baseUrl: "https://625ac011398f3bc782a5b971.mockapi.io/api",
    products: "/products",
    categories: "/categories",
    news: "/news",
    cart: "/cart"
};

//3-api.tao instance
const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

//2-api.
const api = {
    url,
    //4-api
    instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,
};

export default api;
