import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function iconButton({ icon, label, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = (StyleSheet.create = {
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
