module.exports = {
    apps: [
        {
            name: 'api-template',
            script: 'yarn start',
            instances: 1,
            autorestart: true,
            watch: true,
        },
    ],
}
