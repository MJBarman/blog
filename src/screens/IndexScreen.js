import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import NewsAPI from "../../api/NewsAPI";
import NewsCard from "../Components/NewsCard";

const IndexScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI(), [];
  });

  function getNewsFromAPI() {
    NewsAPI.get(
      "top-headlines?country=us&apiKey=e2ae3da097264763b535007699ed7102"
    )
      .then(async function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
