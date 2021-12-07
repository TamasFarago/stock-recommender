import React from 'react'
import { StyleSheet, Text, View, Platform} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function Header({navigation}: {navigation: any}) {
    const currentRoute = navigation.getState().routes[0].name
    const insets = useSafeAreaInsets()
    
    return (
        <View style={[styles.container, {marginTop: Platform.OS === "android"? insets.top : 0}]} accessible={true} accessibilityRole="header">
            <Text style={styles.title}>{currentRoute}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "center",
        top: 0,        
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "700"
    }
})
