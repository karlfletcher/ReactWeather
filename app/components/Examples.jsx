var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h3 className="text-center page-title">Examples</h3>
      <p>Here are a few example locations to try out: </p>
      <ol>
        <li>
          <Link to='/?location=Preston'>Preston, UK</Link>
        </li>
        <li>
          <Link to='/?location=Dublin'>Dublin, UK</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
