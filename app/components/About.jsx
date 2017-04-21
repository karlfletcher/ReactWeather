var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>This app uses the `Open Weather Map` api to pull weather information for any city you enter. Go to the Get Weather page or search in the top right to begin!</p>
    </div>
  )
}

module.exports = About;
