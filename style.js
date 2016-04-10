var React = require('react-native');

module.exports = React.StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 110,
    flexDirection: 'row',
    overflow: 'hidden'
  },

  btn: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  num: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },

  numText: {
    textAlign:'center'
  }
});
