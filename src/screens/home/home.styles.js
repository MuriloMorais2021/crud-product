import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      height: 150,
      backgroundColor: '#D7D2F4',
      justifyContent: 'space-around',
      padding: 10,
    },
    headerTitle: {
      marginTop: 20,
      backgroundColor: '#D7D2F4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input:{
      width: '50%',
      height: 56,
      padding: 5,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    inputPrice:{
      width: '30%',
      height: 56,
      padding: 5,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
    },
    content: {
      padding: 10,
      height: '100%',
      // backgroundColor: '#ccc',
    },
    cardProducts: {
      width: '100%',
      height: 80,
      backgroundColor: '#D9D9D9',
      marginTop: 10,
      padding: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#ccc',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentProd: {
      marginLeft: 10,
      justifyContent: 'space-around'
    },
    iconDelete: {
      height: '100%',
      justifyContent: 'center'
    },
    contentEmpty:{
      marginTop: 30,
      alignItems: 'center',
    },
    noItemsText: {
      fontSize: 16,
    }
  });