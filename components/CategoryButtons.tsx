import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CategoryButtonsProps = {
  onCategoryChanged: (category: string) => void;
};

const CategoryButtons = ({ onCategoryChanged }: CategoryButtonsProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    if (selected) {
      selected.measureLayout(
        scrollRef.current as unknown as number,
        (x, y, width) => {
          scrollRef.current?.scrollTo({
            x: x - width / 5,
            y: 0,
            animated: true,
          });
        }
      );
    }
    onCategoryChanged(destinationCategories[index].title);
  };
  return (
    <View>
      <Text style={styles.headingText}>Categories</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              ref={(el) => (itemRef.current[index] = el)}
              onPress={() => handleSelectCategory(index)}
              style={[
                activeIndex === index
                  ? styles.activeCategoryButton
                  : styles.inactiveCategoryButton,
                styles.categoryButton,
              ]}
            >
              <MaterialCommunityIcons
                size={20}
                name={item.iconName as "symbol"}
                color={activeIndex === index ? Colors.white : Colors.black}
              />
              <Text
                style={{
                  color: activeIndex === index ? Colors.white : Colors.black,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
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
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  activeCategoryButton: {
    backgroundColor: Colors.primaryColor,
  },
  inactiveCategoryButton: {
    backgroundColor: Colors.white,
  },
});
