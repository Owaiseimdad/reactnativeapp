import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddNames = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const changeHandlerText = (val) => {
    setText(val);
  };

  const changeHandlerNumber = (val) => {
    setNumber(val);
  };

  const addText = () => {
    submitHandler(text, number);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="new name"
        onChangeText={changeHandlerText}
      />
      <TextInput
        style={styles.input}
        placeholder="+6 868 8789"
        onChangeText={changeHandlerNumber}
        keyboardType="numeric"
      />
      <Button
        title="add"
        onPress={addText}
        color="black"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
  },
  button: {
    height: 50,
    padding: 5,
    alignContent: "center",
    borderRadius: 10,
  },
});

export default AddNames;
