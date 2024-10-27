import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import listingData from "@/data/destination.json";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();

  const currentListing = listingData.find((item) => item.id === id);

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href=".." asChild>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.backButton}>
                  <Feather name="arrow-left" size={20} />
                </View>
              </TouchableOpacity>
            </Link>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.backButton}>
                <Feather name="bookmark" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{ gap: 20, backgroundColor: Colors.white }}>
        <Image source={{ uri: currentListing?.images }} style={styles.image} />

        <View style={styles.contentWrapper}>
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                color: Colors.black,
                letterSpacing: 0.5,
              }}
            >
              {currentListing?.name}
            </Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <FontAwesome5
                name="map-marker-alt"
                color={Colors.primaryColor}
                size={18}
              />
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: Colors.black }}
              >
                {currentListing?.location}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconTextWrapper
              heading="Duration"
              subHeading={`${currentListing?.duration} Days`}
              icon={<Feather name="clock" />}
            />
            <IconTextWrapper
              heading="Duration"
              subHeading={`${currentListing?.duration} Days`}
              icon={<Feather name="clock" />}
            />
            <IconTextWrapper
              heading="Duration"
              subHeading={`${currentListing?.duration} Days`}
              icon={<Feather name="clock" />}
            />
          </View>

          <Text>{currentListing?.description}</Text>
        </View>
      </View>
    </>
  );
};

export default ListingDetails;

const IconTextWrapper = ({
  icon,
  heading,
  subHeading,
}: {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
}) => (
  <View style={styles.iconDecorationWrapper}>
    <View style={styles.iconDecoration}>{icon}</View>

    <View>
      <Text style={{}}>{heading}</Text>
      <Text>{subHeading}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: { width: width, height: IMG_HEIGHT },
  contentWrapper: {
    paddingHorizontal: 20,
    gap: 20,
  },
  iconDecorationWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  iconDecoration: {
    backgroundColor: "rgba(50,50,50,0.1)",
    padding: 5,
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
});
