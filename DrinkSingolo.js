import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default class DrinkSingolo extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const {nome, immagine, ingredienti} = this.props;

    return(

      <View style={styles.vista}>

        <Image
          style={styles.foto}
          source={{
            uri: immagine,
          }}
        />
        <View style={styles.scritte}>


          <Text style={styles.nome}>
            {nome}
          </Text>

          <View style={styles.viewIngredienti}>

            {

              this.props.ingredienti.map((item,index) =>
              <Text
                key={index}
                style={styles.ingredienti}>
                {item}
              </Text>
            )

            }

          </View>




        </View>



      </View>

    )}

}


const styles = StyleSheet.create({
  vista:{
    margin: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  foto:{
    width:150,
    height:150,
    borderRadius: 20,
  },
  scritte:{
    alignSelf: "stretch",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'blue',
  },
  nome:{
    fontSize: 25,
  },
  viewIngredienti:{

  },
  ingredienti:{
    fontSize: 20
  }
})
