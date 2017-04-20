var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
      <p className="text-center">It is <b>{temp}&#8451;</b> in {location}!</p>
    );
}

module.exports = WeatherMessage;
