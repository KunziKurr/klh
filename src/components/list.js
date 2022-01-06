import React, { Component,useEffect,useState,Fragment } from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image,TouchableOpacity } from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';
import { format, compareAsc } from 'date-fns'
import randomColor from 'randomcolor'
import NumberHolder from './no_holder.js'
import {hymn} from "./provider";

const dateToday = format(new Date(), 'EEEE, MM yyy');

// console.log(color);
// let strokeColor= "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
const strokeColor = randomColor({
   luminosity: 'dark',
//    hue: 'light'
});

function Hymnlist(){
    const [numberState, setNumberState] = useState(styles.hymnnoHolderEven);

    // const [strokeColor, setstrokeColor] = useState();
    //         useEffect(() => {
    //         const color = randomColor({
    //             luminosity: 'dark',
    //             hue: 'dark'
    //         });
    //         setstrokeColor(color)

    // })
    return(
        <View style={styles.parentContainer}>
            <View style={styles.headerContainer}>
            <Svg width="30" height="30" viewBox="0 0 20 20" style={styles.drawerBtn}>
                <Path fill="#000" d="M16.4 9h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 13h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM3.6 7h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1z"></Path>
            </Svg>

                <Text style={styles.usernameText}>Hi, User</Text>
                <Text style={styles.dateToday}>{dateToday}</Text>

                <Svg width="20" height="20" viewBox="0 0 20 20" style={styles.searchbtn}>
                    <Path fill="#000" d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></Path>
                </Svg>

            </View>
        <ScrollView style={styles.hymnParentContainerM}>
            <View style={styles.hymnParentContainer}>
            {
                hymn.songs.map((song) => {
                    // useEffect(() => {
                    //     ( song.number & 1 ) ? setNumberState(styles.hymnnoHolderOdd) : setNumberState(styles.hymnnoHolderOdd);
                    // })
                
                console.log(song.numberState)
                    
                    return <Fragment key={song.number}>
                         <View style={styles.hymnHolder}>
                            <Text style={styles.hymnNumber}> {song.number} </Text>
                            
                            <NumberHolder gridStyle={( song.number & 1 ) ? styles.hymnnoHolderOdd : styles.hymnnoHolderOdd}strokeColor={strokeColor} />
                        </View>
                        </Fragment>
                })
            }
           

           

            </View>
        </ScrollView>


        </View>
    )
}
export default Hymnlist;
const styles = StyleSheet.create({
    hymnHolder:{
        width:"48%",
        height:120,
        alignItems: 'center',
        justifyContent:'center',
        // position:'relative',
        marginBottom:20,
        marginLeft:1,
        marginRight:1,
        borderWidth:2
    },
    hymnNumber:{
        color:'#fff',
        position:'absolute',
        left:"14.5%",
        top:"46%",
        zIndex: 10,
        fontSize:20,
        fontWeight:'700'
    },
     hymnNumberEven:{
        color:'#fff',
        position:'absolute',
        right:"10.5%",
        top:"46%",
        zIndex: 10,
        fontSize:20,
        fontWeight:'700'
    },
     hymnnoHolderOdd:{
        alignSelf:'flex-start',
        position:'absolute',
       left:-30,
       top:'-25%'
    },
     hymnnoHolderEven:{
        alignSelf:'flex-start',
        position:'absolute',
       right:-25,
       top:'-25%'
    },
  
    hymnParentContainerM:{
        
    },
    hymnParentContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-evenly",
        flexWrap:'wrap',
        marginTop:42
    },
    searchbtn:{
        alignSelf:'flex-end',
        justifyContent:'center',
        position: 'absolute',
        right: 10,
    }, 
    drawerBtn:{
        alignSelf:'flex-start',
        position: 'absolute',
        left:10
    },
    parentContainer:{
        backgroundColor:'#fff',
        flex: 1,
    },
    headerContainer:{
        // backgroundColor:'red',
        height:'10%',
        justifyContent: 'center',
        display: 'flex',
    },
    usernameText:{
        color:'#000',
        alignSelf: 'center',
        fontSize:25,
    },
    dateToday:{
        color:'#000',
        fontSize:16 ,
        marginBottom:5,
        alignSelf: 'center',

    }
});