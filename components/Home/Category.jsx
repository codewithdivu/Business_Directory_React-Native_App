import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { getStoryItem } from "../../services/getService";
import { COLLECTIONS } from "../../constants/Constants";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getStoryItem(COLLECTIONS.CATEGORIES);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCategoryPress = (id) => {
    console.log(id);
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.PRIMARY,
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View
              style={{
                padding: 15,
                backgroundColor: Colors.ICON_BG,
                borderRadius: 99,
                marginRight: 15,
              }}
            >
              <Image
                source={{ uri: item?.icon }}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 5,
                marginLeft: -15,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
