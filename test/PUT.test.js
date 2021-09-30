import si from 'search-index';
import 'regenerator-runtime/runtime'
import { it, expect } from '@jest/globals';

import test from require('tape');


//   test('create a search index', t => {
//     t.plan(1)
//     si({ name: indexName }).then(db => {
//       global[indexName] = db
//       t.pass('ok')
//     })
//   })

// test('can add data', t => {
//     t.plan(1)
//     global[indexName].PUT(carData).then(response =>
//       t.deepEquals(response, [
//         { _id: '0', status: 'CREATED', operation: 'PUT' },
//         { _id: '1', status: 'CREATED', operation: 'PUT' },
//         { _id: '2', status: 'CREATED', operation: 'PUT' }
//       ])
//     )
//   })


//   it('create searchindex', async () => {
//     const items = [
//         { id: 1, date: 100 },
//         { id: 2, date: 200 },
//         { id: 3, date: 300 },
//     ];


//     const searchIndex = await si();

//     const index = searchIndex.PUT(items)
    
//     expect(index).toStrictEqual(1)

    
    
//     // const res = index.search({
//     //   query: '',
//     //   page: 1,
//     //   per_page: 1,
//     //   filter: (item) => item.id > 1,
//     // });
//     // expect(res.data.items).toStrictEqual([{ _id: 2, date: 200, id: 2 }]);

//   });