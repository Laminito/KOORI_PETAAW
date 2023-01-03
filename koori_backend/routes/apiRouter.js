let userAllRoutes = require('./userRoutes');
let authAllRoutes = require('./authRoutes')
let evaluationNoteAllRoutes = require('./evaluationNoteRoutes')
let kooriAllRoutes = require('./kooriRoutes')
let petaawAllRoutes = require('./petaawRoutes')
let demandeAllRoutes = require('./demandeRoutes')
let phaseAllRoutes = require('./phaseRoutes')

module.exports = [
    userAllRoutes,
    authAllRoutes,
    evaluationNoteAllRoutes,
    kooriAllRoutes,
    demandeAllRoutes,
    petaawAllRoutes,
    phaseAllRoutes
]