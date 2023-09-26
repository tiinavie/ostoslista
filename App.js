import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

export default function App() {
  const [ostos, setOstos] = useState('');
  const [data, setData] = useState([]);

  function clear() {
    setData('');
    setOstos('');
  }

  function add() {
    setData([...data, {key: ostos}])
    setOstos('');
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
      placeholder='add item'
      value={ostos}
      onChangeText={ostos => setOstos(ostos)}
      />
      <View style={styles.buttons} >
        <Button title='add' onPress={add} />
        <Button title='clear' onPress={clear} />
      </View>
      <View style={{paddingTop: 20}}>
        <Text>Shopping List</Text>
        <FlatList
        data={data}
        renderItem={({item}) => 
        <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 180,
  },

  input: {
    borderWidth: 1,
    borderColor: "grey",
    display: "flex",
    width: 150,
    margin: 5,
    paddingHorizontal: 3,
    textAlign: "left",
  },

  buttons: {
    width:Dimensions.get("window").width * 0.4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
  },
});
