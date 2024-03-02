import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react/cjs/react.development";
import Header from "./components/header";
import { data } from "./data.js";
import AddNames from "./components/addNames.js";
import DemoNames from "./components/demoNames.js";

export default function App() {
  var demo = [];
  data.forEach((e) => {
    demo.push({ name: e.firstName, key: e.id, phone: e.phone });
  });
  var [names, setNames] = useState(demo);

  const pressHandler = (key) => {
    setNames((prevTodo) => {
      console.log("clicked delete");
      return prevTodo.filter((e) => e.key != key);
    });
  };

  const submitHandler = (text, number) => {
    if (text.length > 3 && number.length >= 10) {
      setNames((prevTodo) => {
        return [
          { name: text, key: names.length + 1, phone: number },
          ...prevTodo,
        ];
      });
    } else if (text.length < 3) {
      Alert.alert("OOPS!!", "todos must be more than 3 chars long", [
        {
          text: "Understood",
          onPress: () => console.log("alert was shown"),
        },
      ]);
    } else {
      Alert.alert("Invalid!!", "number should be more than 10", [
        {
          text: "Understood",
          onPress: () => console.log("alert was shown"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddNames submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={names}
              renderItem={(item) => {
                return (
                  <DemoNames
                    name={item.item.name}
                    id={item.item.key}
                    phone={item.item.phone}
                    pressHandler={pressHandler}
                  />
                );
              }}
            />
          </View>
          <View style={styles.Add}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
