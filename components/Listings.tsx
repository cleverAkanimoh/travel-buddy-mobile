import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface ListingDataType {
  id: string;
  name: string;
  images: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
}

const Listings = ({ listings }: { listings: ListingDataType[] }) => {
  const renderItem: ListRenderItem<ListingDataType> = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{ gap: 20, backgroundColor: Colors.white, borderRadius: 10 }}
      >
        <View style={{ position: "relative", padding: 1 }}>
          <Image
            source={{ uri: item.images }}
            width={280}
            height={280}
            style={{ borderRadius: 10 }}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: "absolute",
              bottom: -20,
              right: 20,
              backgroundColor: Colors.primaryColor,
              borderRadius: 40,
              padding: 8,
              borderWidth: 2,
              borderColor: Colors.white,
            }}
          >
            <Ionicons name="bookmark-outline" size={22} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 10, paddingBottom: 5, gap: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location" size={20} color={Colors.primaryColor} />
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                {item.location}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: Colors.primaryColor,
              }}
            >
              ${item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
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

export default Listings;

const styles = StyleSheet.create({});
