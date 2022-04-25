module.exports = {
    // //基本路径
    // publicPath:'./',
    // //输出文件目录
    // outputDir:'dist',
    // lintOnSave:true,
    // assetsDir:'static'
    
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/API': {
                target: `http://47.97.155.31:8081/`,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                '^/API': ''
                },
            },
            '/loginApi': {
                target: `http://47.97.155.31:8082`,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                '^/loginApi': ''
                },
            }
        }
    }
}