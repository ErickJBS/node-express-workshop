const express = require('express')
const cors = require('cors')

class App {

    constructor(port, routes = []) {
        this.port = port;
        this.app = new express();

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    initializeRoutes(routes) {
        routes.forEach(router => {
            this.app.use('/api', router)
        });
    }

    initializeMiddlewares() {
        this.app.use(cors())
    }
    
    async listen() {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port, () => {
                resolve();
            }).on('error', (error) => {
                reject(error);
            })
        })
    }
}

module.exports = App;