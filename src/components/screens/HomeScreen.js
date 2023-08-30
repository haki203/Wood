import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, PanResponder, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayScreen from './PlayScreen';
import { connect } from 'react-redux'; // Import connect từ react-redux
import { scrollUp, scrollDown } from '../../actions/scrollActions';
const { width, height } = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Khởi tạo các trạng thái ban đầu ở đây
            lastScrollY: 0,
            currentIndex: -1,

        };
        this.navigation = props.navigation;
        // Khai báo các phương thức được sử dụng trong component
        this.renderItem = this.renderItem.bind(this);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderRelease,
        });
        this.startY = 0;
        this.animatedValue = new Animated.Value(0);
    }
    handleBookSelection = () => {
        this.props.toggleIsPlay();

    };
    renderItem = ({ item }) => {
        return (
            <View style={{}}>
                <TouchableOpacity onPress={this.handleBookSelection} style={styles.bookContainer}>
                    <Image style={styles.bookImage} source={{ uri: item.image }} />
                </TouchableOpacity>
            </View>
        );
    };
    renderItemCategory = ({ item }) => {
        return (
            <View style={{}}>
                <TouchableOpacity >
                    <View style={styles.itemCategory}>
                        <Text style={styles.itemNameCategory}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    handleScroll = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;
        const isTabVisible = this.props.isTabVisible;


        // So sánh với giá trị cuộn trước đó
        if (currentScrollY > this.state.lastScrollY) {
            this.props.scrollDown();

        } else if (currentScrollY < this.state.lastScrollY) {
            this.props.scrollUp();

        } else {
            console.log(parseInt(currentScrollY));
        }

        this.setState({ lastScrollY: currentScrollY });
    }


    /* cpn -----------------------------------*/
    renderHeader() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.leftHeader}>
                    <Image style={styles.logo} source={require('../../assets/images/gg.png')} />
                    <Text style={styles.name}>Worm</Text>
                </View>
                <View style={styles.rightHeader}>
                    <Icon style={{ marginRight: 10 }} name="search" color={'white'} size={25} />
                    <Icon name="cog" color={'white'} size={28} />
                </View>
            </View>

        );
    }
    renderCategoryList() {
        return (
            <View style={styles.listCategoryContainer}>
                <View style={styles.categoryNameContainer}>
                    <Text style={[styles.categoryName,{paddingTop: 20}]}>Danh mục</Text>
                </View>
                <View style={styles.listCategory}>
                    <FlatList
                        data={sampleCategories}
                        renderItem={this.renderItemCategory}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
            </View>
        );
    }
    /* cpn -----------------------------------*/

    /*---------------------------------------------*/
    render() {

        const { isPlay } = this.props;
        if (isPlay) {
            return (
                <View style={{ flex: 1 }} {...this.panResponder.panHandlers}>
                    <PlayScreen />
                </View>

            );
        }

        return (
            <LinearGradient style={styles.container} colors={[ '#e6f2ff','#cce6ff']}>
                {this.renderHeader()}

                <View style={{}}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        onScroll={this.handleScroll }
                        scrollEventThrottle={16}
                    >
                        {this.renderCategoryList()}
                        <View style={styles.listContainer}>
                            <View style={styles.categoryNameContainer}>
                                <Text style={styles.categoryName}>Dành cho bạn</Text>
                                <TouchableOpacity style={styles.seeMoreContainer}>
                                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={sampleBooks}
                                renderItem={this.renderItem}
                                onScroll={this.flScroll}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>
                        <View style={styles.listContainer}>
                            <View style={styles.categoryNameContainer}>
                                <Text style={styles.categoryName}>Dành cho ông hàng xóm</Text>
                                <TouchableOpacity style={styles.seeMoreContainer}>
                                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={sampleBooks}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>
                        <View style={styles.listContainer}>
                            <View style={styles.categoryNameContainer}>
                                <Text style={styles.categoryName}>Dành cho tôi</Text>
                                <TouchableOpacity style={styles.seeMoreContainer}>
                                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={sampleBooks}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>
                    </ScrollView>
                </View>



            </LinearGradient>
        );

    }
};
const mapStateToProps = state => ({
    isPlay: state.play.isPlay,
    scrollY: state.scrollY,
    isTabVisible: state.scroll.isTabVisible,
});

const mapDispatchToProps = (dispatch) => ({
    toggleIsPlay: () => dispatch({ type: 'TOGGLE_IS_PLAY' }),
    updateScrollY: (scrollY) => dispatch({ type: 'UPDATE_SCROLL_Y', payload: scrollY }),
    scrollUp: () => dispatch(scrollUp()),
    scrollDown: () => dispatch(scrollDown()),
});
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        paddingLeft: 10,
        width: width,
        height: height,
        paddingBottom:50

    },
    bookContainer: {
        width: 150,
        height: 220,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    listContainer: {
        width: '100%',
        paddingBottom: 30,
    },
    listCategoryContainer: {

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingRight:10
    },
    leftHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rightHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    categoryContainer: {
        width: '100%',
    },

    categoryName: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Poppins-Black',
        
    },
    itemCategory: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#F5F5FA',
        marginRight: 12,
        borderRadius: 10,
        marginBottom: 32
    },
    itemNameCategory: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Black',
    },
    categoryNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    seeMoreContainer: {
        paddingRight: 16
    },
    seeMoreText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#4838D1',
        fontWeight: '500',
        fontFamily: 'Poppins-Black',
    },

    logo: {
        width: 35,
        height: 35,
    },
    name: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
    bookImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const sampleCategories = [
    {
        id: 1,
        name: 'Sach cc',
    },
    {
        id: 2,
        name: 'Khoi nghiep',
    },
    {
        id: 3,
        name: 'Bussiness',
    },
    {
        id: 4,
        name: 'Book',
    },
    {
        id: 5,
        name: 'Bookkker',
    },
    {
        id: 6,
        name: 'Anime',
    },
]
const sampleBooks = [
    {
        id: 1,
        title: 'Book 1',
        image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
    },
    {
        id: 2,
        title: 'Book 2',
        image: 'https://bizweb.dktcdn.net/100/176/269/products/toi-thay-hoa-vang-tren-co-xanh-ban-in-moi-2018.jpg?v=1547696190593'
    },
    {
        id: 3,
        title: 'Book 3',
        image: 'https://newshop.vn/public/uploads/products/53377/chien-thang-con-quy-trong-ban-sbooks.jpg'
    },
    {
        id: 4,
        title: 'Book 4',
        image: 'https://firstnews.com.vn/public/uploads/products/nghigiaulamgiau-biamem110k-resized.jpg'
    },
    {
        id: 5,
        title: 'Book 5',
        image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
    },
    {
        id: 6,
        title: 'Book 6',
        image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
    },
    // Thêm sách khác tại đây
];