import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./src/components/Input";
import ListJobs from "./src/components/ListJobs";

export default function App() {
  const [listJobs, setListJobs] = useState([]);

  const handlePressAdd = (currentText) => {
    if (!currentText) return;
    setListJobs((currentList) => [...currentList, currentText]);
  };

  const handleDeleteItem = (itemIndex) => {
    setListJobs((currentList) => {
      currentList.splice(itemIndex, 1);
      return currentList;
    });
  };
  console.log("re-render after delete==");
  return (
    <View style={styles.container}>
      <Input onAdd={handlePressAdd} />
      <ListJobs listJobs={listJobs} onDelete={handleDeleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
