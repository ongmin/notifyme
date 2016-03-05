
var React = require('react')
// var _ = require('lodash')
var Store = require('../stores/store')
// var Actions = require('../actions/Actions')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  getInitialState: function () {
    return {
      messages: Store.getAllMessages(),
      messageCount: Store.getMessageCount(),
      requestCount: Store.getRequestCount(),
      notificationCount: Store.getNotificationCount()
    }
  },

  render: function () {
    return (
      <div>
        <div className='body-container'>
        <RouteHandler />
        </div>
      </div>
    )
  }
})

module.exports = App
