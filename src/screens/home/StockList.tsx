import React from 'react'
import { StyleSheet, Text, View, ScrollView , Dimensions, TouchableNativeFeedback} from 'react-native'
import { MiniChart } from '..'
import Colors from '../../constants/Colors'
import {_data, _stock} from "../../../interfaces"

export function StockList({navigation, inputValue, data}: {navigation: any, inputValue: string, data: []}) {

    const openModal = (stock: _stock, difference: number) => {
        navigation.navigate("Details", {stock, difference})
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stocks</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: Dimensions.get("window").height}}>
            {data.filter((val: any) => {
                if(inputValue === ""){
                    return val
                } else if(val.name.toLowerCase().includes(inputValue.toLowerCase())){
                    return val
                }
            }).map((stock: _stock) => {
                const day1 = stock.datasets[0].data[0]
                const today = stock.datasets[0].data[9]
                const calc = today - day1;
                const difference = (calc / day1) * 100

                return (
                    <TouchableNativeFeedback onPress={() => openModal(stock, difference)} key={stock.id}
                        >
                        <View style={styles.row} key={stock.id} accessible={true}>
                            <View>
                            <Text style={styles.stockName}>{stock.symbol}</Text>
                            <Text style={styles.stockNameSm}>{stock.name}</Text>
                            </View>
                            <MiniChart data={stock} openModal={openModal} difference={difference}/>
                            <View>
                                <Text style={styles.stockName}>{stock.datasets[0].data[9].toFixed(2)}</Text>
                                <Text style={[styles.difference, {color: difference > 0? Colors.green : Colors.red}]}>{difference.toFixed(2)}%</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                )
            }
            )}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
    },
    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "700",
        width: Dimensions.get("window").width * 0.25,
    },
    stockName: {
        fontSize: 16,
        color: "white",
        fontWeight: "700",
        width: Dimensions.get("window").width * 0.2,
    },
    stockNameSm: {
        fontSize: 14,
        color: "rgba(255,255,255,0.5)",
        marginTop: 8,
        fontWeight: "700",
        width: Dimensions.get("window").width * 0.2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)"
    },
    difference: {
        fontSize: 14,
        marginTop: 8
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "700",
        marginBottom: 12
    }
})
