import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export default function Loader() {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the animation loop
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true, // Use native driver for better performance
      })
    ).start();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Rotate from 0 to 360 degrees
  });

  const rotateStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dualRing, rotateStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Make sure the loader is centered
  },
  dualRing: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make it circular
    borderWidth: 6.4,
    // borderColor: "#3498db", // Color of the ring
    borderColor: Colors.PRIMARY,
    borderTopColor: "transparent", // Make one part transparent for the spinning effect
    borderRightColor: "transparent",
  },
});
