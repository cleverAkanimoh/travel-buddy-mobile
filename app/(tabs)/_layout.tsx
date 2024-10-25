import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

// import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
          shadowColor: "rgba(0,0,0,0)",
          marginBottom: 15,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="search-outline" size={20} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
