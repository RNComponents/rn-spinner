// var React = require('react')
/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
var styles = require('./style')

class Spinner extends Component {

  constructor(props){
    super(props)
    this.state = {
      min: props.min,
      max: props.max,
      num: typeof props.value !== 'undefined' ? props.value : props.default
    }
  }

    componentWillReceiveProps (nextProps) {
      if (nextProps.min) {
        this.setState({
          min: nextProps.min
        })
      }
      if (nextProps.max) {
        this.setState({
          max: nextProps.max
        })
      }
      if (nextProps.value) {
        this.setState({
          num: nextProps.value
        })
      }
    }

    _onNumChange = (num) => {
      if (this.props.onNumChange) this.props.onNumChange(num)
    }

    _increase = () => {
      // JSON.stringify(this.props)
      // alert(JSON.stringify(this.props))
      // console.log(this.props);
      if (this.props.disabled) return

      if (this.state.max > this.state.num) {
        var num = this.state.num + 1
        if (typeof this.props.value === 'undefined') {
          this.setState({
            num: num
          })
        }

        this._onNumChange(num)
      }
    }

    _decrease = () => {
      if (this.props.disabled) return

      if (this.state.min < this.state.num) {
        var num = this.state.num - 1
        if (typeof this.props.value === 'undefined') {
          this.setState({
            num: num
          })
        }

        this._onNumChange(num)
      }
    }

    render () {
      return (
        <View style={[styles.container,
          { borderColor: this.props.showBorder ? this.props.color : 'transparent' },
          { width: this.props.width } ]}>
          <TouchableOpacity
            style={[styles.btn,
              { backgroundColor: this.props.color },
              { borderColor: this.props.showBorder ? this.props.color : 'transparent' },
              { height: this.props.height } ]}
            onPress={this._decrease}>
            <Text style={[styles.btnText,
                { color: this.props.buttonTextColor, fontSize: this.props.btnFontSize }]}>-</Text>
          </TouchableOpacity>
          <View style={[styles.num,
              { borderColor: this.props.showBorder ? this.props.color : 'transparent', backgroundColor: this.props.numBgColor, height: this.props.height
              }]}>
            <Text style={[styles.numText, {color: this.props.numColor, fontSize: this.props.fontSize}]}>{this.state.num}</Text>
          </View>
          <TouchableOpacity
            style={[styles.btn,
              { backgroundColor: this.props.color },
              { borderColor: this.props.showBorder ? this.props.color : 'transparent' },
              { height: this.props.height }]}
            onPress={this._increase}>
            <Text style={[styles.btnText,
                { color: this.props.buttonTextColor, fontSize: this.props.btnFontSize
                }]}>+</Text>
          </TouchableOpacity>
        </View>
      )
    }
}

Spinner.defaultProps = {
  min: 0,
  max: 99,
  default: 0,
  color: '#33c9d6',
  numColor: '#333',
  numBgColor: 'white',
  showBorder: true,
  fontSize: 14,
  btnFontSize: 14,
  buttonTextColor: 'white',
  disabled: false,
  width: 90,
  height: 30
};

module.exports = Spinner
