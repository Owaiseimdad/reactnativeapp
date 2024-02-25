import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react/cjs/react.development";
import { data } from "./data";

export default function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(0);
  const [textName, setTextName] = useState({});
  const [textAge, setTextAge] = useState(0);

  const printTouchedvalue = (e) => {
    console.log(e);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.user}
            onPress={() => {
              printTouchedvalue(item.email);
            }}
          >
            <Text>First Name: {item.firstName}</Text>
            <Text>Last Name: {item.lastName}</Text>
            <Text>Location: {item.address.city}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  user: {
    backgroundColor: "grey",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
