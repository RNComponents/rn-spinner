var React = require('react-native');

module.exports = React.StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 91,
    flexDirection: 'row',
    overflow: 'hidden'
  },

  btn: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  btnText: {
    color: 'white',
    fontSize: 16
  },

  num: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  numText: {
    textAlign:'center'
  }
});
