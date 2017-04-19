var React = require('react');

var WeatherForm = React.createClass({

  _onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(typeof location == "string" && location.length > 0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this._onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;