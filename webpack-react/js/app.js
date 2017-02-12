var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
    getInitialState() {
        return {secondsElapsed: 0};
    },

    tick: function() {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    },

    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    render: function() {
        return (
            <div>
                <h3>It's the final countdown</h3>
                Seconds elapsed: {this.state.secondsElapsed}
            </div>
        );
    }
});

ReactDOM.render(<Timer />, document.getElementById('container'));

require('./login');