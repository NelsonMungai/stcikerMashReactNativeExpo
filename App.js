import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./components/imageViewer";
import Button from "./components/Button";
const placeholderImage = require("./assets/images/background-image.png");
import * as imagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1.0,
    });
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select an image");
    }
  };
  const onSaveAsync = () => {
    // later imp
  };
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    // later
  };

  return (
    <View style={styles.container}>
      <View style={{ color: "#fff" }}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this Photo"
            onPress={() => {
              setShowAppOptions(true);
            }}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    paddingTop: 58,
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
