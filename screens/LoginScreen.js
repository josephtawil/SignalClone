import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from "expo-status-bar"

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light"/>
            <Image source={{
                uri: "",
            }}
            style={{width: 200, height:200}}
            />            
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
