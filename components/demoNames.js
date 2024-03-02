import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DemoNames({ name, id, pressHandler }) {
  return (
    <View style={styles.header} onStartShouldSetResponder={() => true}>
      <Text style={styles.title} key={id}>
        {name}
      </Text>
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
