import { View, FlatList, StyleSheet } from "react-native";
import SingleJob from "./SingleJob";

const ListJobs = ({ listJobs, onDelete }) => {
  return (
    <View style={styles.listJobContainer}>
      <FlatList
        data={listJobs}
        renderItem={(itemJob) => {
          return <SingleJob itemJob={itemJob} onDelete={onDelete} />;
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  );
};

export default ListJobs;

const styles = StyleSheet.create({
  listJobContainer: {
    flex: 5,
    paddingTop: 8,
  },
});
