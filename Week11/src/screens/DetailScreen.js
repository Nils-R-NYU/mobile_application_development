import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const DetailScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam("id");

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);

      setResult(response.data);
      console.log(JSON.stringify(response.data.photos, null, 2));
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  // use effect with empty [] second argumement to avoid loop, and only call once on mount
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View style={{ padding: 15 }}>
      <Text style={styles.title}>{result?.name}</Text>
      <Text style={styles.id}>ID: {id}</Text>

      {/* Address */}
      <Text style={styles.address}>
        {result?.location?.display_address?.join(", ")}
      </Text>

      {/* Open or not */}
      <Text style={result?.hours?.is_open_now ? styles.open : styles.closed}>
        {result?.hours?.is_open_now ? "Open" : "Closed"}
      </Text>

      {/* Price */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Price Category: </Text>
        <Text style={styles.rowContent}>{result?.price}</Text>
      </View>

      {/* Rating */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Rating: </Text>
        <Text style={styles.rowContent}>
          {result?.rating} Stars, {result?.review_count} Reviews
        </Text>
      </View>

      {/* Phone Number */}
      <Text style={styles.phone}>{result?.display_phone}</Text>

      {/* Photos */}
      {result && result.photos && result.photos.length > 0 ? (
        <FlatList
          horizontal
          data={result.photos}
          keyExtractor={(photo) => {
            return photo.id;
          }}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.img} />;
          }}
        />
      ) : (
        <Text style={styles.noPhotos}>
          This restaurant does not have any photos
        </Text>
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  id: {
    fontSize: 10,
    color: "gray",
    fontStyle: "italic",
    marginBottom: 5,
  },
  img: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "black",
    marginRight: 5,
  },
  open: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "white",
    backgroundColor: "#00C851",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  closed: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "white",
    backgroundColor: "#ff4444",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  address: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
  },
  rowTitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  rowContent: {
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  noPhotos: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginVertical: 30,
  },
  phone: {
    marginBottom: 15,
    color: "#33b5e5",
  },
});
