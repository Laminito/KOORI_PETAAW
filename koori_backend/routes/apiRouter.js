let userAllRoutes = require('./userRoutes');
let authAllRoutes = require('./authRoutes');
let kooriAllRoutes = require('./kooriRoutes');
let serviceAllRoutes = require('./servicesRouter');

module.exports = [
    userAllRoutes,
    authAllRoutes,
    kooriAllRoutes,
    serviceAllRoutes
]