import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";

const CategoryButtons = () => {
  return (
    <View>
      <Text style={styles.headingText}>Categories</Text>

      <ScrollView>
        {destinationCategories.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
  },
});
