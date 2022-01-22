module.exports = {
    devServer: {
        proxy: 'http://localhost:3000'
    }
//     // devServer: {
//     proxy: {
//         '^/api/*': {
//             target: 'https://localhost:3000',
//             changeOrigin: true,
//         }
//     },
//     disableHostCheck: true
//     // }
}