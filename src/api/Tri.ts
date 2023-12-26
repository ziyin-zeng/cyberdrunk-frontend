import { post, get } from '../utils/request'


export const doAlgoTriInsertion = () => {
    let tableauJson = {'tab':[20, 0, 2, 1, 98, 54, 93, 4, 3]}
    return post(`/tri/insertion`, tableauJson);
}