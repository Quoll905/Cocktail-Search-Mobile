import axios from 'axios';

let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function SchermataAvvio() {

  const [nome, onChangeNome] = React.useState('');

  return(

    <View style={styles.contenitore_form}>
      <Text style={styles.label}>Cerca cocktail</Text>
        <TextInput
          blurOnSubmit={true}
          placeholder='Cerca...'
          style={styles.input}
          onChangeText={nome => nome!='' ? onChangeNome(nome) : onChangeNome('')}
          value={nome}
          />
        <View style={styles.submit}>
          <Button
            title="🔎"
            color = 'white'
            accessibilityLabel="Cerca"
            onPress={()=>submit(nome)}
          />
        </View>
    </View>

  )

}

function submit(nome){

  console.log('-----------------------------');

  axios.get(URL, {
    params: {
      f: nome
    }
  })
  .then(function (response) {
    variabile = true;
    let arrayDrinks = response.data.drinks;
    if (arrayDrinks!=null) {
      arrayDrinks.forEach((item) => {
        DATA.push(item);
        console.log(item.strDrink);
      });
    }
  })

}




const styles = StyleSheet.create({
  contenitore_form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  label: {
    color: 'white',
    fontSize: 35,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 3,
    textAlign: 'center',
    margin: 20,
  },
  submit: {
    backgroundColor: 'white',
    margin: 20,
    height: 50,
    width: 50,
    justifyContent: 'center'
  },
})
