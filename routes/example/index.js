'use strict'

const { getAllLists } = require("../../controllers/Lists")



module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.send(await getAllLists(request.query))
  })
}
