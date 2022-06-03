import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Text adjustsFontSizeToFit={true} style={styles.title}>
        {" "}
        {item.title}{" "}
      </Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image
        resizeMode="scale"
        style={styles.image}
        source={{ uri: item.urlToImage }}
      />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    width: width,
    margin: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    width: width,
    margin: width * 0.03,
    color: "grey",
    fontSize: 15,
  },
  image: {
    width: width,
    height: height * 0.2,
    margin: width * 0.02,
    cornerRadius: 30,
  },
  author: {
    margin: width * 0.03,
    fontSize: 15,
    color: "lightgrey",
  },
});

export default NewsCard;
