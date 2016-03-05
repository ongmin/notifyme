'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  getInitialState: function () {
    return {
      datacount: 12
    }
  },
  render: function () {
    return (
    <div className='topbar'>

      <ul className='align-left'>
        <li><Link to='app' id='brand'>BAT</Link></li>
        </ul>

      <ul className='align-right'>
        <li><Link to='app'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><i className='fa fa-envelope'></i></li>
        <span className='count'>{this.state.datacount}</span>
        <li><i className='fa fa-bell'></i></li>
        <span className='count'>{this.state.datacount}</span>
        <li><i className='fa fa-cutlery'></i></li>
        <span className='count'>{this.state.datacount}</span>
      </ul>

    </div>
    )
  }
})

module.exports = Header
