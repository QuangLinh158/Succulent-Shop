import api from "./api";

const list = () => api.get(api.url.products).then((res) => res.data);
const get = (id) => api.get(`${api.url.products}/${id}`).then((res) => res.data);
const add = (data) => api.post(api.url.products, data).then((res) => res.data);

const update = (id, data) => api.put(`${api.url.products}/${id}`, data).then((res) => res.data);

const remove = (id) => api.delete(`${api.url.products}/${id}`).then((res) => res.data);

const proService = {
    list,
    get,
    add,
    update,
    delete: remove,
};

export default proService;