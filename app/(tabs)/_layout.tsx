import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 name={props.name} size={24} color={props.color} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dados Random',
          tabBarIcon: ({ color }) => <TabBarIcon name="dice" color={color} />,
          tabBarActiveTintColor: '#e91e63',
        }}
      />
    </Tabs>
  );
}
