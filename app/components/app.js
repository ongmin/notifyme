
var React = require('react')
var Header = require('./common/header')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className='header-container'>
        <Header/>
        </div>
        <div className='body-container'>
        <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = App
