module.exports = {
    apps : [
        {
            name: "LibraSoftDocs",
            script: "npm start -- --port 3320 --host 0.0.0.0",
            //script: "npm run serve -- --port 3320 --host 0.0.0.0",
            watch: false,
            env: {}
        }
    ]
}