var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  _onSearch: function(e){
    e.preventDefault();

    var location = this.refs.search.value;
    var eLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = `#/?location=${eLocation}`;
    }
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-title"><h3>React Weather</h3></div>
        <div>
          <div className="top-bar-left">
            <ul className="menu">
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link></li>
              <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this._onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" ref="search" placeholder="Enter city name"></input>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
