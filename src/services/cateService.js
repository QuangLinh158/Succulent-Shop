import api from "./api";

const list = () => api.get(api.url.categories).then((res) => res.data);
const get = (id) => api.get(`${api.url.categories}/${id}`).then((res) => res.data);
const add = (data) => api.post(api.url.categories, data).then((res) => res.data);

const update = (id, data) => api.put(`${api.url.categories}/${id}`, data).then((res) => res.data);

const remove = (id) => api.delete(`${api.url.categories}/${id}`).then((res) => res.data);



const cateService = {
    list,
    get,
    add,
    update,
    delete: remove,
};

export default cateService;