module.exports = {
    resolve:{
        fallback:{
            // "path": require.resolve("path-browserify")
            "process": require.resolve("process/bro")
            // "path": false
        }
    }
}