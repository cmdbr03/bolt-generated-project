import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { createStackNavigator } from '@react-navigation/stack';
    import { Text, View, StyleSheet } from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const ScheduleScreen = () => (
      <View style={styles.container}>
        <Text>Schedule</Text>
      </View>
    );

    const CustomersScreen = () => (
      <View style={styles.container}>
        <Text>Customers</Text>
      </View>
    );

    const ProductsScreen = () => (
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    );

    const CreateNewScreen = () => (
      <View style={styles.container}>
        <Text>Create New</Text>
      </View>
    );

    const InventoryScreen = () => (
      <View style={styles.container}>
        <Text>Inventory</Text>
      </View>
    );

    const FilesScreen = () => (
      <View style={styles.container}>
        <Text>Files</Text>
      </View>
    );

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A2540'
      }
    });

    export default function App() {
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                  case 'Schedule': iconName = 'calendar-clock'; break;
                  case 'Customers': iconName = 'account-group'; break;
                  case 'Products': iconName = 'air-conditioner'; break;
                  case 'Create New': iconName = 'plus-circle'; break;
                  case 'Inventory': iconName = 'warehouse'; break;
                  case 'Files': iconName = 'file-document'; break;
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#FF6B35',
              tabBarInactiveTintColor: '#A8B2C3',
              tabBarStyle: {
                backgroundColor: '#0A2540',
                borderTopColor: '#0A2540'
              },
              headerStyle: {
                backgroundColor: '#0A2540',
              },
              headerTintColor: '#FFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            })}
          >
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Customers" component={CustomersScreen} />
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Create New" component={CreateNewScreen} />
            <Tab.Screen name="Inventory" component={InventoryScreen} />
            <Tab.Screen name="Files" component={FilesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
