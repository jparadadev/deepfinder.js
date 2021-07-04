const { deepFind } = require('./deep-find')

const partialDeepFind = (obj) => (path, ...params) => deepFind(obj, path, ...params)

const nativify = (funcName) => {
    const name = funcName || 'deepFind'
    Object.defineProperty(Object.prototype, name, {
        set: function() {},
        get: function() {
            return partialDeepFind(this)
        },
        configurable: true,
    });
    Object.defineProperty(Array.prototype, name, {
        set: function() {},
        get: function() {
            return partialDeepFind(this)
        },
        configurable: true,
    });
}

module.exports = {
    nativify,
}