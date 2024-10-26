import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/data/destination.json";

const HomePage = () => {
  const headerHeight = useHeaderHeight();
  const [_, setCategory] = useState("All");
  const [filteredListingData, setFilteredListingData] = useState(listingData);

  const onCategoryChanged = (category: string) => {
    setCategory(category);

    if (category === "All") {
      setFilteredListingData(listingData);
      return;
    }

    setFilteredListingData(
      listingData.filter((item) => item.category === category)
    );
  };

  const onSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.currentTarget;

    console.log(value);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: -4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>Explore The Beautiful World!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchWrapper}>
            <Ionicons name="search" size={18} />
            <TextInput
              placeholder="Search..."
              onChange={onSearch}
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons onCategoryChanged={onCategoryChanged} />

        <Listings listings={filteredListingData} />
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
    gap: 20,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    padding: 12,
  },
});
