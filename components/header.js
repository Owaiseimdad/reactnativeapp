import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Contacts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 10,
    margin: 5,
    height: 50,
    alignContent: "center",
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
