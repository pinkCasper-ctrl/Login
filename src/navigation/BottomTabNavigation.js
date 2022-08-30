import {Append, Home, Messages, Profile, Search} from '../screens';
import { Image, Text, View } from 'react-native';
import { Login, Register } from '../screens';
import React, { Component } from 'react'

import { Colors } from '../utils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import lock from '../assets/images/Lock.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
     tabBarOptions={ {
        showLabel: false,
        style: { 
          backgroundColor: Colors.Blue,
          position:'absolute',
          left:20,
          right:20,
          bottom:25,
          borderRadius: 25,
        }
     }}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../assets/images/Home.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused? Colors.NavyBlue : Colors.Grey,
            }}
            />
            {/* <Text style={{color:focused? Colors.NavyBlue : Colors.Grey,fontSize:12, fontWeight:'600'}}>Home</Text> */}
          </View>
        ),
      headerShown: false,
      }}
      />
      <Tab.Screen name="Search" component={Search} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../assets/images/Search.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused? Colors.NavyBlue : Colors.Grey,
            }}
            />
            {/* <Text style={{color:focused? Colors.NavyBlue : Colors.Grey, fontSize:12, fontWeight:'600'}}>Search</Text> */}
          </View>
        ),
        headerShown: false,

      }}/>
       <Tab.Screen name="Append" component={Append} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{borderWidth:2, alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../assets/images/Sguare-plus.png')}
            style={{              
              width:50,
              height:50,
              tintColor:Colors.NavyBlue,
              borderRadius:20,
              elevation:1,
              position:'absolute',
              bottom:5,
            }}
            />
            {/* <Text style={{color:focused? Colors.NavyBlue : Colors.Grey, fontSize:12, fontWeight:'600'}}>Search</Text> */}
          </View>
        ),
        headerShown: false,

      }}/>
      <Tab.Screen name="Messages" component={Messages} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../assets/images/Chat1.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused? Colors.NavyBlue : Colors.Grey,
            }}
            />
            {/* <Text style={{color:focused? Colors.NavyBlue : Colors.Grey,fontSize:12, fontWeight:'600'}}>Chat</Text> */}
          </View>
        ),
        headerShown: false,

      }}/>
      <Tab.Screen name="Profile" component={Profile}
        options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../assets/images/User-Profile.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused? Colors.NavyBlue : Colors.Grey,
            }}
            />
            {/* <Text style={{color:focused? Colors.NavyBlue : Colors.Grey,fontSize:12, fontWeight:'600'}}>Profile</Text> */}
          </View>
        ),
        headerShown: false,

      }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;

// const routeConfig = {
//   Home: createStackNavigator({ Home: Login }),
// };

// const navigatorConfig = {
//   initialRouteName: 'Home',
//     defaultNavigationOptions: ( navigation ) => ({
//     tabBarOptions: {
//         showLabel: false,
//         showIcon: true,
//         style: { backgroundColor: Colors.Blue },
//     },
//     tabBarIcon: ( focused ) => {
//       const { routeName } = navigation.state;
//       let icon;
//       switch (routeName) {
//         case 'Home': icon = focused ? lock : lock; break;
//         default: icon = focused ? lock : lock; break;
//       }
//       return <Image source={icon} />
//     }
//   })
// }

// const  xyz = createBottomTabNavigator(routeConfig, navigatorConfig);
// export default xyz;


// export default class BottomTabNavigation extends Component {
//   render() {
//     return (
//       <View>
//         <Text>BottomTabNavigation</Text>
//       </View>
//     )
//   }
// }
