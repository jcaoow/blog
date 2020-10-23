module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8888,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    }
}