import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { _stock } from '../../../interfaces'

export function Table({stock}: {stock: _stock}) {
    
    const dateSlice = stock.labels.slice(0, stock.labels.length)
    const reverseDate = dateSlice.reverse()

    const pricesSlice = stock.datasets[0].data.slice(0, stock.datasets[0].data.length)
    const reversePrice = pricesSlice.reverse()
     

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Date</Text>
                {reverseDate.map((date: string) => (
                    <View style={styles.row} key={date}>
                        <Text style={styles.data}>{date}</Text>
                    </View>
                ))}
            </View>
            <View>
                <Text style={[styles.header, {alignSelf: "flex-end"}]}>Closing Price</Text>
                {reversePrice.map((price: number) => (
                    <View style={[styles.row, {justifyContent: "flex-end"}]} key={price}>
                        <Text style={styles.data}>{price.toFixed(2)}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        marginBottom: 32
    },
    header: {
        color: "white",
        fontSize: 14,
        marginBottom: 16,
        flexDirection: "row",
        fontWeight: "700"
    },
    data: {
        marginBottom: 8,
        color: "white",
        paddingTop: 8
    },
    row: { 
        width: Dimensions.get("window").width * 0.5-16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.2)",
        flexDirection: "row",
    }
})
