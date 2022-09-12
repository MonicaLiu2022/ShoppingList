import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const buttonAdd = () => {
    setData([...data, { key: text }]);
    setText('');
  };

  const buttonClear = () => {
    setData([]);
    setText('');
  };


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => setText(text)}
          value={text}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={buttonAdd}
          title="Add"
        />
        <Button
          onPress={buttonClear}
          title="Clear"
        />
      </View>
      <View style={styles.container}>
        <Text>Shopping List</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
