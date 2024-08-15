import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getStoryItem } from "../../services/getService";
import Loader from "../../common/Loader";
import { COLLECTIONS } from "../../constants/Constants";

export default function Slider() {
  const [sliderList, setSliderList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStoryItem(COLLECTIONS.SLIDERS);
      setSliderList(data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 10,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item?.imageUrl }}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  );
}
