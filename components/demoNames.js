import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DemoNames({ name, id, pressHandler, phone }) {
  return (
    <View style={styles.header} onStartShouldSetResponder={() => true}>
      <View style={styles.title}>
        <Text key={id}>{name}</Text>
        <Text>{phone}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          pressHandler(id);
        }}
      >
        <Icon name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "center",
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  title: { flexDirection: "column", flex: 1 },
});
