var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  render: function(){
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4> {this.props.title} </h4>
        <p> {this.props.message} </p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
