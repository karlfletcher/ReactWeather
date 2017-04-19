var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  _handleSearch: function(location){
    var rct = this;

    this.setState({isLoading: true}, function(){
      openWeatherMap.getTemp(location).then(function(temp){
        rct.setState({location: location, temp: temp, isLoading: false});
      }, function(err){
        rct.setState({isLoading: false}, function(){
          alert(err);
        });
      });
    });

  },

  getInitialState: function(){
    return {
      isLoading: false
    };
  },

  render: function(){

    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3> Fetching weather... </h3>
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this._handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
