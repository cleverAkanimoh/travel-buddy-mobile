import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const GroupListings = () => {
  return (
    <View>
      <Text style={styles.headingText}>Group Listings</Text>
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
  },
});
