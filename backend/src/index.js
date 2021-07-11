import { server } from "./server"; // GraphQL server instance

server.start({ port: 3100 }, ({ port }) => {
    console.log('GraphQL server on port', port)
})

