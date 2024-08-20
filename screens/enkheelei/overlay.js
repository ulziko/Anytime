import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Video from "react-native-video";

const VideoOverlay = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: "https://www.youtube.com/watch?v=H5jSwgcS7rY" }}
        style={styles.video}
        resizeMode="cover" // Adjust the video aspect ratio
      />

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Overlay Text Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  overlayText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default VideoOverlay;
