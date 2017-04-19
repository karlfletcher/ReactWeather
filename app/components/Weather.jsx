var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  _handleSearch: function(location){
    this.setState({
      location: location,
      temp: 11
    })
  },

  getInitialState: function(){
    return {
      location: 'Preston',
      temp: '10'
    }
  },

  render: function(){
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this._handleSearch}/>
        <WeatherMessage temp={this.state.temp} location={this.state.location}/>
      </div>

    );
  }
});

module.exports = Weather;
