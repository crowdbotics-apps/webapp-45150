import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const WeLcomePage = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.NXCvGgMV}><Pressable><View style={styles.wXJtJkES}><Text style={styles.teASntmj}>{"Welcome"}</Text><View style={styles.LOZRruzo}></View><Pressable><View style={styles.dkdVXzVp}></View></Pressable></View></Pressable></ScrollView>
    <View style={styles.dwXNZQGm}></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  wXJtJkES: {
    height: 521,
    width: 894,
    backgroundColor: "#aa5656",
    borderRadius: 0,
    color: "#777777"
  },
  teASntmj: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  LOZRruzo: {},
  NXCvGgMV: {
    position: "absolute"
  },
  dwXNZQGm: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  dkdVXzVp: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: -70
  }
});
export default WeLcomePage;