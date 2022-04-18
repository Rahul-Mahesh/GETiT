import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { auth } from '../../firebase';
import routes from '../navigation/routes';

const User_Homescreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace(routes.USER_L)
          })
          .catch(error => alert(error.message))
    }
    return (
    <View style={styles.container}>
        <View style={styles.avatar}>
            <Text style={styles.badge}>USER</Text>
        </View>
        <Text style={styles.avtext}>{auth.currentUser?.email}</Text>
        <View style={styles.rating}>
            <Image style={styles.star} source={require("../assets/star.png")}/>
            <Image style={styles.star} source={require("../assets/star.png")}/>
            <Image style={styles.star} source={require("../assets/star.png")}/>
            <Image style={styles.star} source={require("../assets/star.png")}/>
            <Image style={styles.star} source={require("../assets/empty-star.png")}/> 
            <Text style={styles.ratingnum}>(20)</Text>           
        </View>            
        <View style={styles.container1}>
            <View style={styles.imagey}>
            </View>
            <Text style={styles.texty}>BUY ITEMS</Text>
      </View>
      <View style={styles.container2}>
            <View style={styles.imagey}>
            </View>
            <Text style={styles.texty}>SELL ITEMS</Text>
      </View>
      <View style={styles.container3}>
            <View style={styles.imagey}>
            </View>
            <Text style={styles.texty2}>MY LISTINGS</Text>
      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.containerlg}
      >
            <Text style={styles.textylg}>LOGOUT</Text>  
       </TouchableOpacity>                    
      </View>    
    )
}

export default User_Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    container1: {
        position: 'absolute',
        top: 220,
        left: 23,
        width: 170,
        height: 129,
        backgroundColor: '#30FF00',
        borderRadius: 6,
    },
    container2: {
        position: 'absolute',
        top: 220,
        left: 225,
        width: 170,
        height: 129,
        backgroundColor: '#FF6C00',
        borderRadius: 6,
    },
    container3: {
        position: 'absolute',
        top: 370,
        left: 23,
        width: 373,
        height: 129,
        backgroundColor: '#003CFF',
        borderRadius: 6,
    },
    containerlg: {
        position: 'absolute',
        top: 600,
        left: 23,
        width: 373,
        height: 65,
        backgroundColor: '#FF0000',
        borderRadius: 6,
    },            
     texty: {
        position: 'absolute',
        top: 99,
        left: 50,
        lineHeight: 22,
        color: '#41404AFF'
     },
     texty2: {
        position: 'absolute',
        top: 99,
        left: 145,
        lineHeight: 22,
        color: '#F44336',    
     },
     textylg: {
        position: 'absolute',
        top: 20,
        left: 140,
        lineHeight: 30,
        color: '#FFFFFF',
        fontSize: 25,    
     },     
     imagey: {
         position: 'absolute',
         top: 0,
         left: 0,
         width: 119,
         height: 95,
         color: '#30FF00',
     },
    avatar: {
        position: 'absolute',
        top: 50,
        left: 180,
        width: 60,
        height: 60,
        fontSize: 20,
        lineHeight: 50,
        borderRadius: 30,
        backgroundColor: '#FF6C00',
    },
    badge: {
        top: 18,
        left: 5,
        width: 50,
        height: 25,
        fontSize: 20,
    },
    avtext: {
        position: 'absolute',
        top: 115,
        left: 160,
        fontSize: 14,
        lineHeight: 22
    },
    rating: {
        position: 'absolute',
        top: 150,
        left: 165,
        width: 80,
        height: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    star: {
        width: 16,
        height: 16,
    },
    ratingnum: {
        left: 5,
        width: 40,
        height: 20,
    },
  })