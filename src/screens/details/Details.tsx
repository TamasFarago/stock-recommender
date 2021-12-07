import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Chart, Table } from '..';
import useRecommend from '../../hooks/useRecommend';
import { _recommend } from '../../../interfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function Details({route, navigation}: {route: any, navigation: any}) {
    const [openNote, setOpenNote] = useState<boolean>(false)
    const {stock, difference} = route.params
    const {recommendation, bottomThreshold, topThreshold}: _recommend = useRecommend({stock})
    
    const recommendationColor = () => {
        switch(recommendation){
            case "SELL":
                return Colors.red
            case "BUY":
                return Colors.green
            default: 
                return "white"
        }
    }

    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={{width: 60}}>
                <View style={{padding: 16, marginTop: Platform.OS === "android"? insets.top : 0}}>
                    <AntDesign name="left" size={24} color="white" />
                </View>
            </TouchableOpacity>
            <View style={styles.titleGroup} onTouchEnd={() => setOpenNote(false)}>
                <Text style={styles.symbol}>{stock.symbol}</Text>
                <Text style={styles.name}>{stock.name}</Text>
                <Text style={styles.price}>{stock.datasets[0].data[9].toFixed(2)}</Text>
                <Text style={styles.posts}>{stock.posts} posts</Text>
            </View>
            <Chart data={stock} difference={difference} openNote={openNote} setOpenNote={setOpenNote}/>
            <View style={styles.actionContainer} onTouchEnd={() => setOpenNote(false)} accessible={true}>
                <Text style={[styles.header, {textAlign: "center"}]}>Recommended action</Text>
                <Text style={[styles.action, {color: recommendationColor()}]} accessibilityLiveRegion="polite">{recommendation}</Text>
                <Text style={styles.actionNote}>Sell above: {topThreshold.toFixed(2)}</Text>
                <Text style={styles.actionNote}>Buy bellow: {bottomThreshold.toFixed(2)}</Text>

            </View>
            <View style={styles.overviewContainer} onTouchEnd={() => setOpenNote(false)}>
                <Text style={styles.header}>Overview</Text>
                <Text style={styles.dayCount}>Data for the last {stock.labels.length} day/s</Text>
                <Table stock={stock} />
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1
    },
    titleGroup: {
        margin: 16
    },
    symbol: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    },
    name: {
        fontSize: 14,
        color: "rgba(255,255,255,0.5)",
        marginTop: 8
    },
    posts: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 16,
    },
    price: {
        fontSize: 35,
        color: "white",
        fontWeight: "700",
        marginTop: 16
    },
    dayCount: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 12,
        marginVertical: 8,
        fontWeight: "700"
    },
    header: {
        fontSize: 20,
        color: "white",
        fontWeight: "700"
    },
    overviewContainer: {
        marginHorizontal: 16
    },
    actionContainer: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    action: {
        fontSize: 24,
        fontWeight: "700",
        marginVertical: 16,
        textAlign: "center"
    },
    actionNote: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 12,
        marginBottom: 6
    }

})
