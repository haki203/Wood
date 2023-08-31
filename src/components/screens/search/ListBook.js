import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ItemBook from './ItemBook'
const colorText = "#00004d";
const fontText = "Poppins-Medium";
const ListBook = (props) => {
    const data1 = props.data.filter(item => item.category === 'ebook');
    const data2 = props.data.filter(item => item.category === 'audiobook');

    return (
        <View style={styles.container}>
            <View style={{
                height: 40,
                paddingRight: 20, width: '100%',
                flexDirection: 'row', alignItems: 'center',
                marginBottom: 10

            }}>
                <Text style={{ fontSize: 22, color: colorText, fontFamily: fontText, width: '50%' }}>
                    {props.isPressed === 0 ? 'Tất cả sách' : props.isPressed === 1 ? 'Sách đọc' : 'Sách nói'}
                </Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center', width: '60%',
                    paddingRight: 10

                }}>
                    <Text style={styles.textSeeAll}>Xem tất cả {'('}</Text>
                    <Text style={styles.textSeeAll}>
                        {props.isPressed === 0 ?
                            (props.data.length) : props.isPressed === 1 ?
                                (data1.length) :
                                (data2.length)}
                    </Text>
                    <Text style={styles.textSeeAll}>{')'}</Text>
                </TouchableOpacity>
            </View>
            {
                (props.isPressed === 0) ? (
                    <FlatList
                        data={props.data}
                        renderItem={({ item }) => <ItemBook {...item} />} // Sử dụng ItemBook để hiển thị từng mục
                        keyExtractor={(item) => item.id}
                    />
                ) :
                    (
                        <View></View>
                    )
            }
            {
                (props.isPressed === 1) ? (
                    <FlatList
                        data={data1}
                        renderItem={({ item }) => <ItemBook {...item} />} // Sử dụng ItemBook để hiển thị từng mục
                        keyExtractor={(item) => item.id}
                    />
                ) :
                    (
                        <View></View>
                    )
            }
            {
                (props.isPressed === 2) ? (
                    <FlatList
                        data={data2}
                        renderItem={({ item }) => <ItemBook {...item} />} // Sử dụng ItemBook để hiển thị từng mục
                        keyExtractor={(item) => item.id}
                    />
                ) :
                    (
                        <View></View>
                    )
            }
        </View>
    )
}

export default ListBook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
    },
    textSeeAll: { color: 'orange', fontFamily: fontText, fontSize: 16 },
})