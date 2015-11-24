var React = require('react-native');

module.exports = React.StyleSheet.create({
  container: {
    borderWidth:1,
    borderRadius:4,
    width: 90,
    flexDirection:'row'
  },

  btn: {
    paddingVertical:5,
    paddingHorizontal:10
  },

  btnText: {
    color: 'white',
    fontSize: 16
  },

  num: {
    paddingVertical:5,
    alignItems:'center',
    justifyContent:'center'
  },

  numText: {
    width:30,
    textAlign:'center'
  }
});
