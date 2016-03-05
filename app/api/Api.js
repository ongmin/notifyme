'use strict'

// Mocking up an API with hard coded data
var messages = require('./messageData').messages
var tally = require('./messageData').tally

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
  },

  updateMessageCount: function (count) {
    var existingMessageIndex = _.indexOf(tally, _.find(tally, { id: count.id }))
    console.log(count)
    tally.splice(existingMessageIndex, 1, count)
    var messageCount = _.find(tally, {id: 'messageCount'})
    return messageCount.value
  },

  getMessageCount: function () {
    var messageCount = _.result(_.find(tally, { id: 'messageCount' }), 'value')
    console.log('api' + messageCount)
    return messageCount
  },

  getRequestCount: function () {
    var requestCount = _.result(_.find(tally, { id: 'requestCount' }), 'value')
    console.log('api' + requestCount)
    return requestCount
  },

  getNotificationCount: function () {
    var notificationCount = _.result(_.find(tally, { id: 'notificationCount' }), 'value')
    console.log('api' + notificationCount)
    return notificationCount
  }

}

module.exports = Api
