import { post, get } from '../utils/request'


export const doAlgoTriInsertion = () => {
    return post(`/tri/insertion`);
}