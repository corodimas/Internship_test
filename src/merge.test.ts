import  {merge} from './merge';

const collection_1: number[] = [1, 3, 5, 7, 9];
const collection_2: number[] = [2, 4, 6, 8, 10];

test('merge collection_1 and collection_2', ()=>
{   
    const mergedCollection = merge(collection_1, collection_2);
    expect(mergedCollection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})