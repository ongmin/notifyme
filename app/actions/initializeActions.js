'use strict'

var Dispatcher = require('./appDispatcher')
var ActionTypes = require('./actionTypes')
var Api = require('../api/Api')

var InitializeActions = {
  initApp: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        messages: Api.getAllMessages()
      }
    })
  }
}

module.exports = InitializeActions
