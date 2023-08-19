import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const InfiniteScrollFlatList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    if (!isLoading) {
      setIsLoading(true);
      // Simulate API call or data fetching
      setTimeout(() => {
        const newData = Array.from({ length: 1 }, (_, index) => page * 10 + index + 1);
        setData((prevData) => [...prevData, ...newData]);
        setPage(page + 1);
        setIsLoading(false);
      }, 1500); // Simulate a delay
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator />
      </View>
    );
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = {
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
};

export default InfiniteScrollFlatList;
