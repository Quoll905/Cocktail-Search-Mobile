import axios from 'axios';

let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

import DrinkSingolo from './DrinkSingolo';


export default class SchermataPrincipale extends Component {

  constructor(props){
    super(props);
  }


  state = {
    lista:[1,2,5,6],
  };




  cerca(nome){

    console.log('-----------------------------');

    axios.get(URL, {
      params: {
        f: nome
      }
    })
    .then((response) => {

      let arrayDrinks = response.data.drinks;

      this.setState({
        lista: arrayDrinks
      });

      if (arrayDrinks!=null) {

        arrayDrinks.forEach((item) => {console.log(item.strDrink);});

      }

      console.log(this.state.lista);

    })


  }

  render() {


    return(

        <>
          <View style= {styles.serachBar} >
            <TextInput
              blurOnSubmit={true}
              placeholder='Cerca...'
              style={styles.input}
              onChangeText={(value)=>this.cerca(value)}
              />
          </View>
          <View style={styles.elementi}>
            <ScrollView style={styles.scrollview}>

              {

                  (this.state.lista!=null) ?

                  this.state.lista.map((item) => {

                    let arrayIngredienti = [];

                    for (let i = 1; i < 16; i++) {
                    let stringa = 'strIngredient'+i.toString();
                    if (item[stringa]!=null) {
                      console.log(item[stringa]);
                      arrayIngredienti.push(item[stringa]);
                      }
                    }





                    return (
                  <DrinkSingolo
                    key={item.idDrinks}
                    nome={item.strDrink}
                    immagine={item.strDrinkThumb}
                    ingredienti = {arrayIngredienti}
                    /> )




                  }) :

                  null

              }

             </ScrollView>
          </View>
        </>

    )

  }

}


const styles = StyleSheet.create({
  serachBar:{
    flex: 0.6,
    backgroundColor: 'grey',
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 3,
    textAlign: 'center',
    borderRadius: 20,
  },
  elementi:{
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview:{
    paddingTop: 20,
    backgroundColor: 'lightblue',
    height: 'auto',
    alignSelf: "stretch",
  }

});
