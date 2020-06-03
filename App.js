import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import SchermataAvvio from './SchermataAvvio.js';
import SchermataPrincipale from './SchermataPrincipale.js'



export default function App() {

  const [variabile, onChangeVariabile] = React.useState(false);

  return (

    variabile ? <SchermataAvvio /> : <SchermataPrincipale />


  );
}






const styles = StyleSheet.create({
  lista:{
    backgroundColor: 'black',
    display: 'none',
    flex: 1
  },
  lista1:{
    backgroundColor: 'black',
    display: 'flex',
    flex: 10
  }




});
