'use strict';

var React = require('react-native');
var styles = require('./style');

var {
  View,
  Text
} = React;

var Spinner = React.createClass({
  getInitialState () {
    return {
      min: this.props.min || 0,
      max: this.props.max || 99,
      num: this.props.default || 0
    }
  },

  _onNumChange () {
    if (this.props.onNumChange) this.props.onNumChange(this.state.num);
  }

  _increase () {
   if (this.state.max > this.state.num) {
     var num = this.state.num;
     this.setState({
       num: ++num
     });

     this._onNumChange(num);
   }
 },

 _decrease () {
   if (this.state.min < this.state.num) {
     var num = this.state.num;
     this.setState({
       num: --num
     });

     this._onNumChange(num);
   }
 },

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this._decrease}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <View style={styles.num}>
          <Text style={styles.numText}>{this.state.num}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this._increase}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = Spinner;
