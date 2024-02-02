import { post, get } from '../utils/request'


export const doAlgoTriInsertion = () => {
    let tableauJson = {'tab':[20, 0, 2, 1, 98, 54, 93, 4, 3]}
    return post(`/tri/insertion`, tableauJson);
}

const swap = (array: number[], orgIndex: number, destIndex: number) => {
    var tempValue = array[orgIndex];
    array[orgIndex] = array[destIndex];
    array[destIndex] = tempValue;
}

export const selectSort = (array: number[]) => {
    const n = array.length;
    if (n<2) return;
    for(var i=0;i<n-1;i++) {
        var minIndex = i;
        for(var subIndex=i+1;subIndex<n;subIndex++) {
            if(array[minIndex]>array[subIndex]){
                minIndex = subIndex;
            }
        }
        swap(array, minIndex, i);
    }
    console.log(array)
}