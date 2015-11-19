'use strict';

var React = require('react-native');

var {
  View,
  Text
} = React;

var Spinner = React.createClass({
    render () {
      return (
        <View>
          <Text>Spinner</Text>
        </View>
      );
    }
});

module.exports = Spinner;
