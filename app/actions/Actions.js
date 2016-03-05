'use strict'
// var Api = require('../api/Api')

var Dispatcher = require('./appDispatcher')
var ActionTypes = require('./actionTypes')

var Actions = {

  updateMessageCount: function (count) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_MESSAGE_COUNT,
      messageCount: count
    })
  },

  updateRequestCount: function (count) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_REQUEST_COUNT,
      requestCount: count
    })
  },

  updateNotifcationCount: function (count) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_NOTIFICATION_COUNT,
      notificationCount: count
    })
  }
}

module.exports = Actions
