import { View, Text, StyleSheet, Pressable } from "react-native";

const SingleJob = ({ itemJob, onDelete }) => {
  //   console.log("item==", itemJob);
  const handlePressItem = (index) => {
    // console.log("press to delete index:", index);
    onDelete(index);
  };
  return (
    <Pressable onPress={() => handlePressItem(itemJob.index)}>
      <View style={styles.singleJobContainer}>
        <Text style={styles.singleJobText}>{itemJob.item}</Text>
      </View>
    </Pressable>
  );
};

export default SingleJob;

const styles = StyleSheet.create({
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
