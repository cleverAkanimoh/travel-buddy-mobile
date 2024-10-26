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
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

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
      <Link href={`/listing/${item.id}` as any}>
        <TouchableOpacity
          onPress={() => {}}
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
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 10, paddingBottom: 5, gap: 5 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "600" }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: Colors.black,
                  }}
                >
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
        </TouchableOpacity>
      </Link>
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
