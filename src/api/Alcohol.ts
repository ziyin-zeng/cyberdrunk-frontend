import { post, get } from '../utils/request'

export default {
    savaApplyInfo(data = {}) {
        return post('/save', data);
    },
    getAlcoholByCat(cat: number) {
        return get(`/alcohol/${cat}`);
    },
    getByName(name: string) {
        return get(`/get/name/${name}`);
    },
}

export const getAlcoholByCat = (cat: number) => {
    return get(`/alcohol/${cat}`);
}

export const getWhiskeyBrand = () => {
    return get(`/bar`);
}