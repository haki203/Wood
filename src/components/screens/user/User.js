import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const User = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const saveUser = async () => {
    try {
      // Tạo một đối tượng người dùng để lưu vào Firestore
      const user = {
        id,
        name,
        age,
        address,
      };

      // Thêm đối tượng người dùng vào Firestore
      await firestore().collection('users').add(user);

      // Xóa dữ liệu trên các trường sau khi đã lưu thành công
      setId('');
      setName('');
      setAge('');
      setAddress('');
    } catch (error) {
      console.error('Lỗi khi lưu người dùng vào Firestore:', error);
    }
  };

  return (
    <View>
      <TextInput
        value={id}
        onChangeText={(text) => setId(text)}
        placeholder="ID"
      />
      <Text selectable={true}>
        asdhkj asdkhj asdkjh asidhkijahkui asdkjaskdhjk
      </Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Age"
      />
      <TextInput
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Address"
      />
      <Button title="Save User" onPress={saveUser} />
    </View>
  );
};

export default User;
