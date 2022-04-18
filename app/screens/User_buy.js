import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { auth } from '../../firebase';
import routes from '../navigation/routes';


function User_buy(props) {
    return (
        <View>
            <Text style={styles.text}>BUY ITEMS</Text>
            <View style={styles.search}>
                <View style={styles.searchbox}></View>
            </View>
            <View style={styles.Itemcontainer1}>
            <View style={styles.imagey}>
            </View>
            <Text style={styles.texty}>Product Title</Text>
            <Text style={styles.textx}>Description about the project</Text>
            </View>
            <View style={styles.Itemcontainer2}>
            <View style={styles.imagey}>
            </View>
            <Text style={styles.texty}>Product Title</Text>
            <Text style={styles.textx}>Description about the project</Text>
            </View> 
        </View>
    );
}

export default User_buy;

const styles = StyleSheet.create({
    text : {
        position: 'absolute',
        top: 20,
        left: 155,
        fontSize: 20,
        lineHeight: 30
    },
    search : {
        position: "absolute",
        top : 90,
        left : 25
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
        top: 200,
        left: 30,
        width: 350,
        height: 188,
        borderRadius: 6,
        backgroundColor: "#F9F9FAFF"        
    },
    Itemcontainer2: {
        position: 'absolute',
        top: 420,
        left: 30,
        width: 350,
        height: 188,
        borderRadius: 6,
        backgroundColor: "#F9F9FAFF"        
    },
    imagey: {
       position: 'absolute',
       top: 0,
       left: 0,
       width: 289,
       height: 110,
     },
    texty: {
       position: 'absolute',
       top: 115,
       left: 99,
       fontSize: 14,
       lineHeight: 22,
      color: "#41404AFF",
    },
    textx: {
        position: 'absolute',
        top: 138,
        left: 6,
        width: 278,
        height: 22,
        fontSize: 14,
        lineHeight: 22,
       color: "#95949BFF",
     },
})