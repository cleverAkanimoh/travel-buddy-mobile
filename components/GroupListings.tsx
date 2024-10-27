import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface GroupTypes {
  id: string;
  name: string;
  images: string;
  rating: number;
  reviews: number;
}

const GroupListings = ({ listings }: { listings: GroupTypes[] }) => {
  const renderItem: ListRenderItem<GroupTypes> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: item.images }}
          style={{ width: 80, height: 100, borderRadius: 10 }}
        />
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={14} color={Colors.primaryColor} />
            <Text style={{ fontWeight: "600", fontSize: 14, marginLeft: 5 }}>
              {item.rating}
            </Text>
            <Text style={{ fontWeight: "400", color: "#999", fontSize: 10 }}>
              ({item.reviews})
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ gap: 20 }}>
      <Text style={styles.headingText}>Top Travel Groups</Text>

      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
  },
});
