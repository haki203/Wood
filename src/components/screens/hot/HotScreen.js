import {
    StyleSheet, Text,
    View, Image, ScrollView,
    FlatList, Animated
} from 'react-native'
import React from 'react'
import ItemListView from './ItemListView';
const HotScreen = (props) => {
    const HEADER_HEIGHT = 200;
    const scrollY = new Animated.Value(0);
    const { navigation } = props;
    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );

    const headerBackgroundColor = scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: ['#575294', '#817CB6'],
        extrapolate: 'clamp',
    });


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.Headers, { backgroundColor: headerBackgroundColor }]}>
                <View style={styles.Headers} >
                    <Text style={styles.hot}>Mới & Hot</Text>
                    <View style={styles.icon}>
                        <Image style={styles.search} source={require('../../../assets/images/search-white.png')} />
                        <Image style={styles.profile} source={require('../../../assets/images/profile.png')} />
                    </View>
                </View>
            </Animated.View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    onScroll={handleScroll}
                    scrollEventThrottle={10}>
                    <View style={styles.header}>
                    </View>

                    <FlatList
                        data={DATAne}
                        renderItem={({ item }) => <ItemListView dulieu={item} navigation={navigation} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default HotScreen

const styles = StyleSheet.create({
    container: { flex: 1 },
    Headers: {
        flex: 1,
        flexDirection: 'row',
    },
    hot: {
        color: "#FFFFFF",
        fontSize: 30,
        fontFamily: "Poppins-Medium",
        marginTop: 20,
        marginLeft: 20
    }, icon: {
        marginLeft: 10,
        width: "60%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }, search: {
        width: 40,
        height: 40,
        marginTop: 16,
        marginRight: 10
    }
    , profile: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginRight: 20
    }, body: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: "#575294",
    },
    header: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 30,
        borderTopLeftRadius: 40, // Bo góc trên bên trái
        borderTopRightRadius: 40, // Bo góc trên bên phải
    }
})

const DATAne = [

    {
        "id": 1,
        "bookname": "Đắc Nhân Tâm - Quyển 1",
        "author": "Nhiều Tác Giả",
        "content": "Tham gia vào chuyến phiêu lưu đặc biệt: tới thăm xứ Chín Tầng Mây để tìm tung tích của người Sưu Tầm Gối, hay đi theo những tiếng gọi",
        "category": "SÁCH NÓI MỚI",
        "image": "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-dac-nhan-tam.jpg"
    }, {
        "id": 2,
        "bookname": "Trên Đường Băng - Quyển 1",
        "author": "Nhiều Tác Giả",
        "content": "Cuốn sách Trên đường băng hướng tới đối tượng là độc giả trẻ, là tập hợp những câu chuyện được đăng tải trên fanpage facebook của Tony Buổi Sáng. Nhưng nội dung được tác giả chọn lọc một cách có chủ đích, khác hoàn toàn với loại tản văn thông thường. ",
        "category": "SÁCH TÓM TẮT MỚI",
        "image": "https://docsach24.co/filemanager/data-images/T%C3%A2m%20L%C3%BD%20-%20K%E1%BB%B9%20N%C4%83ng%20S%E1%BB%91ng/tony-buoi-sang-tren-duong-bang.jpg"
    }, {
        "id": 3,
        "bookname": "Người Nam Châm - Bí Mật Của Luật Hấp Dẫn",
        "author": "Nhiều Tác Giả",
        "content": "“Người Nam Châm- Bí Mật Của Luật Hấp Dẫn” là chìa khóa mở ra cánh cửa chứa nhiều bài học và giá trị lớn lao để đạt được mục tiêu sống cho những bạn đã, đang và sẽ đi theo “luật hấp dẫn”, quy luật sống khá quen thuộc với mọi người. ",
        "category": "SÁCH TÓM TẮT MỚI",
        "image": "https://docsach24.co/filemanager/data-images/T%C3%A2m%20L%C3%BD%20-%20K%E1%BB%B9%20N%C4%83ng%20S%E1%BB%91ng/Nguoi-nam-cham---Bi-mat-cua-luat-hap-dan.jpg"
    }
    , {
        "id": 4,
        "bookname": "20 Giờ Đầu Tiên",
        "author": "Nhiều Tác Giả",
        "content": "Việc cảm thấy 24h một ngày là không đủ cũng là chuyện dĩ nhiên trong cuộc sống hiện đại ngày nay. Giải quyết vấn đề này ra sao? Có thực sự nhiều việc đến thế? Bắt tay vào làm như thế nào? Điều gì gây khó khăn cho bạn?...là hàng loạt những câu hỏi đặt ra mà 20 giờ đầu tiên sẽ giúp bạn giải quyết! ",
        "category": "SÁCH TÓM TẮT MỚI",
        "image": "https://docsach24.co/filemanager/data-images/tam-ly-ky-nang-song/sach-20-gio-dau-tien.jpg"
    }
];

