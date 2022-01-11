import React, { Component,useEffect,useState } from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image,TouchableOpacity } from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';
import { format, compareAsc } from 'date-fns'
import randomColor from 'randomcolor'

const dateToday = format(new Date(), 'EEEE, MM yyy');

// console.log(color);
// let props.strokeColor= "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});


function NumberHolder(props){
   // const [strokeColor, setstrokeColor] = useState();
   //          useEffect(() => {
   //          const color = randomColor({
   //              luminosity: 'dark',
   //              hue: 'dark'
   //          });
   //          setstrokeColor(color)

   //  })
return(
<Svg width="150mm" height="237mm" viewBox="0 0 210 297" style={props.gridStyle}>
  <G>
    <G>
       <Path
         id="path1938"
         stroke={props.strokeColor} strokeWidth="4"
         fillOpacity="0.0526316"
         d="m 170.44329,115.6701 c 0,28.93516 -23.83737,52.39175 -53.24226,52.39175 -29.404894,0 -53.242269,-23.45658 -53.242271,-52.39175 0,-6.99621 1.393582,-13.67214 3.922493,-19.773646 7.93024,-19.133304 27.024672,-32.618108 49.319778,-32.618107 29.40489,2e-6 53.24226,23.45659 53.24226,52.391753 z"
          />
      <Ellipse
         id="path3412"
         cx="117.12487"
         fill={props.strokeColor}
         fillOpacity="0.51372552"
         stroke-width="0"
         stroke-miterlimit="4"
         stroke-dasharray="none"
         cy="115.42416"
         rx="38.491356"
         ry="38.151146" />
      <Ellipse
         id="path3412-5"
         fill={props.strokeColor}
         fill-opacity="1"
         cx="117.2953"
         cy="115.59431"
         rx="30.409"
         ry="30.408878" />
      <G
         transform="matrix(0.51916643,0,0,0.87509671,98.245585,31.900247)">
        <Path
           d="m -88.453619,99.680411 16.670112,-26.195876 h 28.2371 c 0,0 -16.235067,19.483645 -15.309278,30.958765 0.706033,8.75126 15.309278,21.43299 15.309278,21.43299 h -27.21648 z" color="#000000"fill={props.strokeColor}fill-opacity="0.967611"stroke-width="0"
           id="path6444"
            />
        <Path
           d="m -88.453619,99.680411 16.670112,-26.195876 h 28.2371 c -6.407564,14.622389 -8.837178,17.916434 -6.765388,29.929795 0.55952,3.2444 3.387251,10.47016 6.383005,14.86414 0.807179,1.18392 3.613912,5.01588 5.103976,6.81573 0.77041,0.93058 0.834839,0.16281 0.834839,0.63877 l -32.772912,0.14332 z" color="#000000"fill={props.strokeColor}
           id="path6441"
            />
      </G>
      <Path
         d="M 60.977996,96.206319 49.290962,119.2766"
         display="inline"fill="none"fill-rule="evenodd"stroke={props.strokeColor}stroke-width="0.264583px"stroke-linecap="butt"stroke-linejoin="miter"stroke-opacity="1"
         id="path4151"
          />
      <Path
         d="M 61.507869,142.05417 49.290962,119.2766"
         fill="none"fill-rule="evenodd"stroke={props.strokeColor}stroke-width="0.264583px"stroke-linecap="butt"stroke-linejoin="miter"stroke-opacity="1"
         id="path4177"
          />
      <Path
         d="M 42.267314,119.65287 60.977996,96.206317"
         fill="none"fill-rule="evenodd"stroke={props.strokeColor}stroke-width="0.264583px"stroke-linecap="butt"stroke-linejoin="miter"stroke-opacity="1"
         id="path4443"
          />
      <Path
         d="M 61.507869,142.05417 42.267314,119.65287"
         fill="none"fill-rule="evenodd"stroke={props.strokeColor}stroke-width="0.264583px"stroke-linecap="butt"stroke-linejoin="miter"stroke-opacity="1"
         id="path4445"
         />
      <Path
         d="m 182.74028,144.86275 v 0"
         fill="none"fill-rule="evenodd"stroke="#000000"stroke-width="0.264583px"stroke-linecap="butt"stroke-linejoin="miter"stroke-opacity="1"
         id="path4469"
          />
    </G>
  </G>
</Svg>
)
}
export default NumberHolder;

const styles = StyleSheet.create({
    hymnnoHolder:{
        position:'relative',
        justifyContent:'flex-start'
    },
});