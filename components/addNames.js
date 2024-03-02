import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddNames = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const addText = () => {
    submitHandler(text);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="new name"
        onChangeText={changeHandler}
      />
      <Button
        title="add"
        onPress={addText}
        color="coral"
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
    padding: 15,
    margin: 10,
    borderBottomWidth: 2,
  },
  button: {
    height: 50,
    padding: 5,
    alignContent: "center",
  },
});

export default AddNames;
