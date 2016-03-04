'use strict'

var React = require('react')

var About = React.createClass({
  render: function () {
    return (

      <div className='bodyContainer'>
        <div className='contentContainer'>
        <h2>About</h2>
          <p>This application uses the following technologies:
          <ul id='techContainer'>
            <li>React</li>
            <li>React Router</li>
            <li>Node</li>
            <li>Babel</li>
            <li>Webpack</li>
          </ul>

          <p>Made by Min @ongmin</p>
        </p>
      </div>
    </div>
    )
  }
})

module.exports = About
