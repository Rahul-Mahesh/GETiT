import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { auth } from '../../firebase';
import routes from '../navigation/routes';


function User_sell(props) {
    return (
        <div>
         <View>
            <Text style={styles.text}>SELL ITEMS</Text>
            <View style={styles.search}>
            <View style={styles.searchbox}></View>
            </View>
            <View style={styles.Itemcontainer1}>
            <View>
            <Text style={styles.texty}>CAR</Text>
                <View style={styles.imagey}>
                </View>
            <View>
        </View>   
        </div>
    );
}

export default User_sell;

const styles = StyleSheet.create({
    text : {
        position: 'absolute',
        top: 20,
        left: 155,
        fontSize: 20,
        lineHeight: 30,
    },
    search : {
        position: "absolute",
        top : 90,
        left : 25,
    },
    searchbox: {
        width: 195,
        height: 36,
        paddingLeft: 34,
        paddingRight: 12,
        fontSize: 14,
        backgroundColor: "#F9F9FAFF" 
    },
    Itemcontainer1: {
        position: 'absolute',
        top: 74,
        left: 30,
        width: 101,
        height: 31,
        borderRadius: 0,
        backgroundColor: "#E0E0E4FF"        
    },
    imagey: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      texty: {
        position: 'absolute',
        top: 76,
        left: 50,
        fontSize: 18,
        lineHeight: 28,
       color: "#27262EFF",
     },
      