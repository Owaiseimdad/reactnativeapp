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
    demo.push({ name: e.firstName, key: e.id });
  });
  var [names, setNames] = useState(demo);

  const pressHandler = (key) => {
    setNames((prevTodo) => {
      console.log("clicked delete");
      return prevTodo.filter((e) => e.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setNames((prevTodo) => {
        return [{ name: text, key: names.length + 1 }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!!", "todos must be more than 3 chars longs", [
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
