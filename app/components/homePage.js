'use strict'

var React = require('react')
var NotificationSystem = require('react-notification-system')
var _ = require('lodash')
// var Count = require('../../lib/Count')


// Data placed here instead of in Store for simplicity of demo, otherwise just replace with Store.function()
var messages = [
  { id: 'message-new', title: 'New Message', content: 'You have a new message.', level: 'info' },
  { id: 'booking-new', title: 'Request Created', content: 'Your booking has been created and is pending the approval from the host.', level: 'info' },
  { id: 'booking-update', title: 'Booking Updated', content: 'There has been an update to your booking.', level: 'info' },
  { id: 'booking-accepted', title: 'Booking Accepted', content: 'Yeay! Your booking has been accepted.', level: 'success' },
  { id: 'booking-rejected', title: 'Booking Rejected', content: 'Sorry your booking has been rejected, how about trying another host?', level: 'warning' },
  { id: 'request-new', title: 'Request Received', content: ' wants to dine with you.', level: 'success' },
  { id: 'bat-update', title: 'BAT Update', content: 'We have a new feature!', level: 'info' }
]

var Home = React.createClass({
  getInitialState: function () {
    return {
      count: 1
    }
  },
  _notificationSystem: null,

  getMessageById: function (id) {
    return _.find(messages, {id: id})
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

  countUp: function () {
    var countNow = this.state.count
    this.setState({count: countNow + 1})
    Store.updateCount(count)
  },

  resetCount: function () {
    this.setState({count: null})
  },

  genericClick: function (event) {
    this.customNotification(event)
    this.countUp()
  },

  customClick: function (event) {
    this.genericNotification(event)
    this.countUp()
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

            <button className='events-button' id='bat-update' onClick={this.genericClick}>Updates from BAT</button>
            <button className='events-button' id='message-new' onClick={this.genericClick}>New Message</button>
            <button className='events-button' id='booking-new' onClick={this.genericClick}>New Booking Request</button>
            <button className='events-button' id='booking-accepted' onClick={this.genericClick}>Booking Status Change - Accepted</button>
            <button className='events-button' id='booking-update' onClick={this.genericClick}>Booking Status Change - Paid</button>

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
