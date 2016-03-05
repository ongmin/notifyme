'use strict'

var Dispatcher = require('../actions/appDispatcher')
var ActionTypes = require('../actions/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'

var _messages = []
var _messageCount = null
var _notificationCount = null
var _requestCount = null

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

  getMessageCount: function () {
    return _messageCount
  },

  getRequestCount: function () {
    return _requestCount
  },

  getNotificationCount: function () {
    return _notificationCount
  }

})

Dispatcher.register(function (action) {
  switch (action.actionType) {

    // For Post Updating
    case ActionTypes.INITIALIZE:
      _messages = action.initialData.messages
      Store.emitChange()
      break

    case ActionTypes.UPDATE_MESSAGE_COUNT:
      _messageCount = action.messageCount
      Store.emitChange()
      break

    case ActionTypes.UPDATE_REQUEST_COUNT:
      _requestCount = action.requestCount
      Store.emitChange()
      break

    case ActionTypes.UPDATE_NOTIFICATION_COUNT:
      _notificationCount = action.notificationCount
      Store.emitChange()
      break

    default:
      // no op
  }
})

module.exports = Store
