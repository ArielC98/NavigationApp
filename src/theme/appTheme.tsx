import { StyleSheet } from "react-native";

export const colores={
  primary:'#5856D6'
}

export const styles = StyleSheet.create({
  globalMargin:{
    marginHorizontal:20
  },
  title:{
    fontSize: 30,
    color:'black',
    marginVertical:10,
    textAlign:'center'
  },
  botonGrande:{
    width:100,
    height:100,
    backgroundColor:'red',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },
  botonGrandeTexto:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  avatar:{
    width:150,
    height:150,

  },
  avatarContainer:{
    alignItems:'center',
    marginTop:15
  },
  menuContainer:{
    marginVertical:20,
    marginHorizontal:30,
  },
  menuItem:{
    marginVertical:10
  },
  menuItemText:{
    fontSize:20
  },
  listaIconos:{
    width:'100%',
    height:400,
    paddingLeft:23,
    flexWrap:'wrap',
    gap:18,
    justifyContent:'center',
    alignItems:'center'
  },
  nombreIcono:{
    marginTop:60,
    //backgroundColor:'red',
    fontSize:25,
    textAlign:'center'
  }
});