import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function ProductForm({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, quantity }),
    }).then(() => navigation.goBack());
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Description" onChangeText={setDescription} />
      <TextInput placeholder="Quantity" onChangeText={setQuantity} />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}
