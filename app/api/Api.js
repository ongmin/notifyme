'use strict'

// Mocking up an API with hard coded data
var messages = require('./messageData').messages
var _ = require('lodash')

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)) // return cloned copy so that the item is passed by value instead of by reference
}

var Api = {
  getAllMessages: function () {
    return _clone(messages)
  },

  getMessageById: function (id) {
    var message = _.find(messages, {id: id})
    return _clone(message)
  }
}

module.exports = Api
