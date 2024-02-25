import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import react from "react";
import { useState } from "react/cjs/react.development";
export default function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(0);
  const [textName, setTextName] = useState({});
  const [textAge, setTextAge] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>
          Hello {name} !!! ({age} years old)
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.textinput}
          placeholder="e.g. John"
          onChangeText={(e) => {
            setTextName(e);
          }}
        />
      </View>
      <View>
        <TextInput
          keyboardType="numeric"
          style={styles.textinput}
          placeholder="e.g. 65"
          onChangeText={(e) => {
            setTextAge(e);
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="update"
          onPress={() => {
            setName(textName);
            setAge(textAge);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "top ",
  },
  textheader: {
    color: "black",
    fontWeight: "bold",
  },
  textinput: {
    borderColor: "#7777",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    width: 200,
    backgroundColor: "white",
  },
  btn: { borderWidth: 1, padding: 10 },
});
