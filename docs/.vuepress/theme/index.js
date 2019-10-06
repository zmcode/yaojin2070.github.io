module.exports = (options, ctx) => ({
    chainWebpack(config, isServer) {
        config.module
            .rule('less')
            .oneOf('normal')
            .use('less-loader')
            .options({ javascriptEnabled: true })
            .end()
            .end()
            .oneOf('modules')
            .use('less-loader')
            .options({ javascriptEnabled: true });

    }
});
