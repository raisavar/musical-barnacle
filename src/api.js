// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 9
module.exports = API;


// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 14
module.exports = API;


// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 29
module.exports = API;


// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 39
module.exports = API;


// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 49
module.exports = API;


// API module for BarnaclePlayer

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 64
module.exports = API;
