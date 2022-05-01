import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import MainHeader from '../../Components/MainHeader';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../Constants/Colors';
import * as CartAction from '../../Store/Action/ProductAction';

const ProductScreen = props => {
  const allProduct = useSelector(state => state.product.allPrroduct);
  const dispatch = useDispatch();

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />

      <View style={{width: '100%', alignItems: 'center'}}>
        <View
          style={{
            height: '93%',
            width: '97%',
            marginVertical: 5,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={allProduct}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={itemData => {
              const addToCartHandler = () => {
                dispatch(CartAction.addToCartAction(itemData?.item));
              };

              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ProductDetail', {
                      product: itemData?.item,
                    })
                  }
                  style={{
                    height: 120,
                    width: '100%',
                    marginVertical: 10,
                    borderBottomColor: 'lightgray',
                    borderWidth: 0.5,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={{height: '80%', width: '100%'}}>
                      <Image
                        style={{
                          height: '90%',
                          width: '90%',
                          resizeMode: 'contain',
                        }}
                        source={{uri: itemData?.item?.image}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      height: '90%',
                      width: '40%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        width: '100%',
                        fontSize: 13,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      {itemData?.item?.title}
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        fontSize: 13,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Rs {itemData?.item?.price}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: Colors.primary,
                      }}>
                      {itemData?.item?.priceUnit}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {`QTY: ${itemData?.item?quantity}`}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={addToCartHandler}
                    style={{
                      height: 30,
                      width: 100,
                      backgroundColor: Colors.primary,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ADD TO CART
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}></View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default ProductScreen;
