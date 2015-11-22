'use strict';

var React = require('react-native');
var styles = require('./style');

var {
  View,
  Text,
  TouchableOpacity,
  PropTypes
} = React;

var Spinner = React.createClass({
  propTypes: {
    min: PropTypes.number,
    max: PropTypes.number,
    default: PropTypes.number,
    color: PropTypes.string
  },

  getDefaultProps () {
    return {
      min: 0,
      max: 99,
      default: 0,
      color: '#33c9d6'
    }
  },

  getInitialState () {
    return {
      min: this.props.min,
      max: this.props.max,
      num: this.props.default
    }
  },

  _onNumChange (num) {
    if (this.props.onNumChange) this.props.onNumChange(num);
  },

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
      <View style={[styles.container, {borderColor:this.props.color}]}>
        <TouchableOpacity style={[styles.btn, {backgroundColor:this.props.color}]} onPress={this._decrease}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <View style={styles.num}>
          <Text style={styles.numText}>{this.state.num}</Text>
        </View>
        <TouchableOpacity style={[styles.btn, {backgroundColor:this.props.color}]} onPress={this._increase}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = Spinner;
