import { View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

const Input = ({ onAdd }) => {
  const [currentText, setCurrentText] = useState("");
  const handleTextChange = (text) => {
    setCurrentText(text);
  };

  const handlePressAdd = () => {
    onAdd(currentText);
    setCurrentText("");
  };

  return (
    <View style={styles.inputContaier}>
      <TextInput
        placeholder="Enter your name..."
        style={styles.inputText}
        onChangeText={handleTextChange}
        value={currentText}
      />
      <Button title="Add job" onPress={handlePressAdd} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContaier: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputText: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
