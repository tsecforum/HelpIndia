import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import DashboardNavigator from './DashboardNavigator';
import { createStackNavigator } from 'react-navigation-stack';


const MainNavigator = createSwitchNavigator({
    LoginNavigator: LoginNavigator,  
    DashboardNavigator: DashboardNavigator,
    
   
    
})

export default createAppContainer(MainNavigator);