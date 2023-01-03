const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './routes/userRoute.js',
]

swaggerAutogen(outputFile, endpointsFiles)