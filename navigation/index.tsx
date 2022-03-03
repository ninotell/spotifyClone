/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

// Icons
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialIcons
} from '@expo/vector-icons';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AlbumScreen from '../screens/AlbumScreen/AlbumScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, TabOneParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeScreenNavigator"
        component={HomeScreenNavigator}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color={color} />,
          headerShown: false
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={28} style={{ marginBottom: -3 }} color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={TabTwoScreen}
        options={{
          title: 'Your Library',
          tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={28} style={{ marginBottom: -3 }} color={color} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeScreenStack = createNativeStackNavigator<TabOneParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeScreenStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={
          { headerTitle: "AlbumScreen" }
        }
      />


    </HomeScreenStack.Navigator>
  )
}

