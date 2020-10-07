import React from 'react';
import {
    View,
    Text, 
    StyleSheet, 
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Easing,
    Animated
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

// import icons

import { iconZirah, iconPedang }  from '../assets/icons';

const Home = () => {

  let opacity = new Animated.Value(0);
  const animate = easing => {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
          easing
      }).start();
  }

  const DATA = [
      {
          name: "Pedang",
          icon: iconPedang
      },
      {
          name: "Zirah",
          icon: iconZirah
      }
  ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => animate(Easing.in(Easing.bounce))}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )

   return(
       <>
        <StatusBar style="light" hidden={false} translucent={false} />
         <ScrollView>
        <View style={styles.container}>
            <View>
            <Text style={{ fontSize:20 }}>Hi, </Text>
            <Text style={styles.name}>Petualang!</Text>
            </View>
            <View>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width:60, height: 60 }}
                />
            </View>

        </View>

        <View style={styles.searchContainer}>
            <Feather name="search" size={15} color="#aaa" style={{ marginRight:15 }} />
            <Text onPress={() => alert('search')} style={styles.searchText}> Nyari apa? </Text>
        </View>

        <View style={styles.headerText}>
            <Text 
              style={{ fontSize:17, fontWeight: '600' }}>Perlengkapan</Text>
            <Text style={{ fontSize:13, fontWeight: '200', color: "#3a81fd", }}> show all </Text>
        </View>


        <View style={{ flex:1 }}>
        <FlatList
            keyExtractor={item =>item.name}
            data={DATA}
            renderItem={renderItem}
        />
        </View>


        </ScrollView>
       </>
   )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#fff",
        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    searchContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#fff",
        marginTop: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    searchText: {
        color: "#aaa"
    },
    headerText: {
        paddingHorizontal: 10,
        marginVertical:8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

})

export default Home;


