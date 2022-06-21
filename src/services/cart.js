import api from "./api";

const list = () => api.get(api.url.cart).then((res) => res.data);
const get = (id) => api.get(`${api.url.cart}/${id}`).then((res) => res.data);
const add = (data) => api.post(api.url.cart, data).then((res) => res.data);

const update = (id, data) => api.put(`${api.url.cart}/${id}`, data).then((res) => res.data);

const remove = (id) => api.delete(`${api.url.cart}/${id}`).then((res) => res.data);



const cartService = {
    list,
    get,
    add,
    update,
    delete: remove,
};

export default cartService;