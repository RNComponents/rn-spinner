var React = require('react')
var ReactNative = require('react-native')
var styles = require('./style')

var { PropTypes } = React
var {
  View,
  Text,
  TouchableOpacity
} = ReactNative

var Spinner = React.createClass({
  propTypes: {
    min: PropTypes.number,
    max: PropTypes.number,
    default: PropTypes.number,
    value: PropTypes.number,
    color: PropTypes.string,
    numColor: PropTypes.string,
    numBgColor: PropTypes.string,
    showBorder: PropTypes.bool,
    fontSize: PropTypes.number,
    btnFontSize: PropTypes.number,
    buttonTextColor: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
  },

  getDefaultProps () {
    return {
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
    }
  },

  getInitialState () {
    return {
      min: this.props.min,
      max: this.props.max,
      num: typeof this.props.value !== 'undefined' ? this.props.value : this.props.default
    }
  },

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
  },

  _onNumChange (num) {
    if (this.props.onNumChange) this.props.onNumChange(num)
  },

  _increase () {
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
  },

  _decrease () {
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
  },

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
})

module.exports = Spinner
