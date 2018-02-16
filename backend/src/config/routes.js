const express = require('express') 

module.exports = function(server){
  //API Routes
  const router = express.Router()
  server.use('/api', router)

  //TODO Routes
  const todoService = require('../api/todo/todoService')
  console.log('--- ### todoService ### ---')
  console.log(todoService.register(router, '/todos'))
  todoService.register(router, '/todos')
}