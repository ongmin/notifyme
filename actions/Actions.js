'use strict'

var Dispatcher = require('./appDispatcher')
var ActionTypes = require('./actionTypes')

var Actions = {
  search: function (id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.FETCH_RESULTS,
      id: id
    })
  }
}

module.exports = Actions
