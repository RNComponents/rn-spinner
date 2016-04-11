var React = require('react-native')

module.exports = React.StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden'
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: 'white',
    textAlign: 'center'
  },

  num: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  numText: {
    textAlign: 'center'
  }
})
