import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [currentText, setCurrentText] = useState("");
  const [listJobs, setListJobs] = useState([]);
  const handleTextChange = (text) => {
    setCurrentText(text);
  };

  const handlePressAdd = () => {
    if (!currentText) return;
    setListJobs((prev) => [...prev, currentText]);
    setCurrentText("");
  };
  // console.log(listJobs);
  return (
    <View style={styles.container}>
      <View style={styles.inputContaier}>
        <TextInput
          placeholder="Enter your name..."
          style={styles.inputText}
          onChangeText={handleTextChange}
          value={currentText}
        />
        <Button title="Add job" onPress={handlePressAdd} />
      </View>
      <View style={styles.listJobContainer}>
        <ScrollView>
          {listJobs.map((job, index) => (
            <View key={index} style={styles.singleJobContainer}>
              <Text style={styles.singleJobText}>{job}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  listJobContainer: {
    flex: 9,
    paddingTop: 8,
  },
  singleJobContainer: {
    backgroundColor: "#672997",
    padding: 8,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 5,
  },
  singleJobText: {
    color: "#FFFFFF",
  },
});
