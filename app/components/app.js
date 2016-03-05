
var React = require('react')
var Header = require('./common/header')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  getInitialState: function () {
    return {
      messageCount: 5,
      notificationCount: 5,
      requestCount: 10
    }
  },

  render: function () {
    return (
      <div>
        <div className='header-container'>
        <Header
          messageCount={this.state.messageCount}
          notificationCount={this.state.notificationCount}
          requestCount={this.state.requestCount} />

        </div>
        <div className='body-container'>
        <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = App
