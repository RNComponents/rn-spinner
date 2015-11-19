var React = require('react-native');

module.exports = React.StyleSheet.create({
  container: {
    borderColor:'#33c9d6',
    borderWidth:1,
    borderRadius:4,
    flexDirection:'row'
  },

  btn: {
    paddingVertical:5,
    paddingHorizontal:10,
    backgroundColor:'#33c9d6'
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
    color:'#333',
    width:30,
    textAlign:'center'
  }
});
