import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.quantity}</Text>
        )}
      />
      <Button title="Add Product" onPress={() => navigation.navigate('ProductForm')} />
    </View>
  );
}
