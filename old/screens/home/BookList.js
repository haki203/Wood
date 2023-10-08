import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const BookList = ({ books }) => {
    const renderBooks = ({ item }) => (
        <View style={styles.bookContainer}>
            <Text>{item.title}</Text>
        </View>
    );
    return (
        <ScrollView style={{ width: '100%', height: '100%',}} >
            <Text>abc</Text>
            <FlatList
                data={books}
                horizontal={true}
                renderItem={renderBooks}
                keyExtractor={(item) => item.id.toString()}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bookContainer: {
        width: 100,
        height: 150,
        margin: 10,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BookList;
