const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@pages' : 'src/pages',
        '@assets' : 'src/assets',
        '@store' : 'src/store'
    })(config)

    return config
}