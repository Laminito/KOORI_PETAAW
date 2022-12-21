const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json';

const endpointsFiles = [
    './routes/userRoutes.js',
    './routes/authRoutes.js',
    './routes/kooriRoutes.js'
]

swaggerAutogen(outputFile, endpointsFiles)