import React, { useRef } from "react";
import { PanResponder, View } from "react-native";

const Dragable = () => {
  const viewRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        viewRef.current.setNativeProps({
          style: {
            left: gestureState.dx,
          },
        });
      },
      onPanResponderRelease: () => {
        // Do something when the view is released
      },
    })
  ).current;

  return (
    <View
      ref={viewRef}
      style={{ width: 100, height: 100, backgroundColor: "red" }}
      {...panResponder.panHandlers}
    />
  );
};

export default Dragable;
