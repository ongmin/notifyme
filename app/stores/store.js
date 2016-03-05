'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'

var _messages = []
var messageCount = null
var notificationCount = null
var requestCount = null

var Store = assign({}, EventEmitter.prototype, {

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  getAllMessages: function () {
    return _messages
  },

  getMessageById: function (id) {
    return _.find(_messages, {id: id})
  },


  }
})

Dispatcher.register(function (action) {
  switch (action.actionType) {

    // For Post Updating
    case ActionTypes.INITIALIZE:
      _messages = action.initialData.messages
      MessageStore.emitChange()
      break
    case ActionTypes.CREATE_MESSAGE:
      _messages.push(action.message)
      MessageStore.emitChange()
      break
    case ActionTypes.UPDATE_MESSAGE:
      var existingMessage = _.find(_messages, {id: action.message.id})
      var existingMessageIndex = _.indexOf(_messages, existingMessage)
      _messages.splice(existingMessageIndex, 1, action.message)
      MessageStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = Store
