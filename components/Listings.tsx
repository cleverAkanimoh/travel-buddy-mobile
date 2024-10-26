import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

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
      <View key={index}>
        <Image source={{ uri: item.images }} />
      </View>
    );
  };

  return (
    <View>
      <FlatList data={listings} renderItem={renderItem} />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({});
