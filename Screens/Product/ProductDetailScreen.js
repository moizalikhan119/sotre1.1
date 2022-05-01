import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import MainHeader from '../../Components/MainHeader';
const ProductDetail = (props, {route}) => {
  const product = route.params.product;
  const clickEventListener = () => {
    Alert.alert('Success', 'Product has beed added to cart');
  };

  return (
    <>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />

      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={{uri: product.thumbNail}}
            />

            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 250,
    height: 250,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'orange',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
