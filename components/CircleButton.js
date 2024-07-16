import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CircleButton({ OnPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton}>
        <MaterialIcons name="add" size={38} color={"#25292e"} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    padding: 3,
    borderRadius: 42,
    borderWidth: 4,
    borderColor: "#ffd33d",
  },
  circleButton: {
    borderRadius: 42,
    borderColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
