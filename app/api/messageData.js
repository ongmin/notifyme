module.exports = {
  messages: [
    { id: 'message-new', title: 'New Message', content: 'You have a new message.', level: 'info' },
    { id: 'booking-new', title: 'Request Created', content: 'Your booking has been created and is pending the approval from the host.', level: 'info' },
    { id: 'booking-update', title: 'Booking Updated', content: 'There has been an update to your booking.', level: 'info' },
    { id: 'booking-accepted', title: 'Booking Accepted', content: 'Yeay! Your booking has been accepted.', level: 'success' },
    { id: 'booking-rejected', title: 'Booking Rejected', content: 'Sorry your booking has been rejected, how about trying another host?', level: 'warning' },
    { id: 'request-new', title: 'Request Received', content: ' wants to dine with you.', level: 'success' },
    { id: 'bat-update', title: 'BAT Update', content: 'We have a new feature!', level: 'info' }
  ],

  tally: [
    { id: 'messageCount', value: '2' },
    { id: 'requestCount', value: '5' },
    { id: 'notificationCount', value: '8' }

  ]
}
