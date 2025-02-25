// fetch('https://yahoo.com')
//     .then((data) => {
//         console.log('data from yahoo.com:', data.url);
//         return fetch('https://google.com')
//     }).then((data) => {
//     console.log('data from google.com:', data.url);
//     return fetch('https://bing.com')
// }).then((data) => {
//     console.log('data from bing.com:', data.url)
// })

// ---------------------------------------------------------------------

// console.log('start')
//
// const foo = async ()=>{
//     console.log('async foo')
// }
// foo()
//
// console.log('end')

// -----------------------------------------------------------------


// console.log('start')
// const foo = async () => {
//     try {
//         const dataFromYahoo = await fetch('https://yahoo.com');
//         console.log('data from yahoo.com:', dataFromYahoo.url)
//         const dataFromBing = await fetch('https://bing.com');
//         console.log('data from bing.com:', dataFromBing.url)
//         const dataFromGoogle = await fetch('https://google.com');
//         console.log('data from google:', dataFromGoogle.url)
//     } catch (e) {
//         console.log('ERROR', e)
//     } finally {
//         console.log('FINALLY')
//     }
// }
// foo().then(()=>{
//     console.log('resolve foo')
// }).catch(err=>{
//     console.log('reject foo',err)
// })
// console.log('end')


// ----------------------------------------------------------------------------------------------

// static method             all race any allSettled


// all

// const pr1 = fetch('https://yahoo.com')
// const pr2 = fetch('https://bing.com')
// const pr3 = fetch('https://www.google.com')
//
// const bigData = Promise.all([pr1, pr2, pr3])
// bigData
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// race

// fetch('https://yahoo.com')
// fetch('https://bing.com')
// fetch('https://www.google.com')
//
// Promise.race([fetch('https://yahoo.com'),
//     fetch('https://bing.com'),
//     fetch('https://www.google.com')])
//
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// any

// fetch('https://yahoo.com')
// fetch('https://bing.com')
// fetch('https://www.google.com')
//
// Promise.any([fetch('https://yahoo.com'),
//     fetch('https://bing.com'),
//     fetch('https://www.google.com')])
//
//     .then(data => console.log(data.url))
//     .catch(error => console.log(error))



// allSettled

// fetch('https://yahoo.com')
// fetch('https://bing.com')
// fetch('https://www.google.com')
//
// Promise.allSettled([fetch('https://yahoo.com'),
//     fetch('https://bing.com'),
//     fetch('https://www.google.com')])
//
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
