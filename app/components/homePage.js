'use strict'

var React = require('react')
var NotificationSystem = require('react-notification-system')
var _ = require('lodash')
var Store = require('../stores/store')
var Actions = require('../actions/Actions')

var Home = React.createClass({
  getInitialState: function () {
    return {
      messages: Store.getAllMessages(),
      messageCount: Store.getMessageCount(),
      requestCount: Store.getRequestCount(),
      notificationCount: Store.getNotificationCount()
    }
  },
  _notificationSystem: null,

  updateCount: function () {
    this.setState({ messageCount: this.state.messageCount })
  },

  getMessageById: function (id) {
    return _.find(this.state.messages, {id: id})
  },

  genericNotification: function (event) {
    event.preventDefault()
    var msg = this.getMessageById(event.target.id)
    this._notificationSystem.addNotification({
      title: msg.title,
      message: msg.content,
      level: msg.level
    })
  },

  customNotification: function (event) {
    event.preventDefault()
    var requester = window.document.getElementById('requester-name').value
    var msg = this.getMessageById(event.target.id)
    this._notificationSystem.addNotification({
      title: msg.title,
      message: requester + msg.content,
      level: msg.level
    })
  },

  addMessageCount: function () {
    console.log('home1 ' + this.state.messageCount)
    var countNow = this.state.messageCount
    this.setState({messageCount: parseInt(countNow, 10) + 1})
    Actions.updateMessageCount(this.state.messageCount)
    console.log('home2 ' + this.state.messageCount)
  },

  addRequestCount: function () {
    console.log('home ' + this.state.requestCount)
    var countNow = this.state.requestCount
    this.setState({requestCount: parseInt(countNow, 10) + 1})
    Actions.updateMessageCount(this.state.requestCount)
  },

  addNotificationCount: function () {
    console.log('home ' + this.state.notificationCount)
    var countNow = this.state.notificationCount
    this.setState({notificationCount: parseInt(countNow, 10) + 1})
    console.log('notif' + typeof countNow)
    Actions.updateMessageCount(this.state.notificationCount)
  },

  resetCount: function () {
    this.setState({
      messageCount: null,
      requestCount: null,
      notificationCount: null
    })
  },

  demoMessage: function (event) {
    this.genericNotification(event)
    this.addMessageCount()
    // this.updateCount()
  },

  demoRequest: function (event) {
    this.genericNotification(event)
    this.addRequestCount()
  },

  demoNotification: function (event) {
    this.genericNotification(event)
    this.addNotificationCount()
  },

  customClick: function (event) {
    this.customNotification(event)
    this.addRequestCount()
  },

  componentDidMount: function () {
    this._notificationSystem = this.refs.notificationSystem
  },

  render: function () {
    return (
        <div className='content-container'>

          <h2>Welcome to BAT!</h2>
          <p>Enable notifications from BAT for the best site experience</p>
          <p>Click on the various events</p>

          <div id='homepage-container'>

            <NotificationSystem ref='notificationSystem' />

              <p>Message count: {this.state.messageCount}</p>
              <p>Request count: {this.state.requestCount}</p>
              <p>Notification count: {this.state.notificationCount}</p>

            <button className='events-button' id='message-new' onClick={this.demoMessage}>New Message</button>
            <button className='events-button' id='bat-update' onClick={this.demoNotification}>Updates from BAT</button>
            <button className='events-button' id='booking-new' onClick={this.demoRequest}>New Booking Request</button>
            <button className='events-button' id='booking-accepted' onClick={this.demoNotification}>Booking Status Change - Accepted</button>
            <button className='events-button' id='booking-update' onClick={this.demoNotification}>Booking Status Change - Paid</button>

            <div id='input-container'>
              <h5>Input Requester Name</h5>
              <input id='requester-name' placeholder='Type name of Requester' onChange={this.handleChange}/>
              <button className='events-button' id='request-new' onClick={this.customClick}>New Inquiry</button>
            </div>

        </div>
      </div>
    )
  }
})

module.exports = Home
