import React from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import Colors from '../../constants/Colors';

export function MiniChart({data, openModal, difference}: {data: any, openModal: any, difference: number}) {
    return (
        <View style={{right: 5, flexDirection: "row", alignItems: "center",  justifyContent: "center"}}>
        <View style={{height: 60, backgroundColor: Colors.primary, width: 2, left: 1,bottom: 10, position: "relative", zIndex: 9999}}/>
        <LineChart
                data={data}
                onDataPointClick={() => openModal(data, difference)}
                width={Dimensions.get("window").width * 0.30}
                height={60}
                yAxisLabel="$"
                withInnerLines={false}
                withHorizontalLabels={false}
                yAxisInterval={1} 
                chartConfig={{
                backgroundColor: Colors.primary,
                backgroundGradientFrom: Colors.primary,
                propsForVerticalLabels: {fontSize: 9},
                backgroundGradientTo: Colors.primary,
                decimalPlaces: 2,
                color: () => difference > 0? Colors.green : Colors.red,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: "0",
                    strokeWidth: "0",
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 1,
                paddingRight: 0,
                paddingLeft: 0,
                paddingBottom: 0,
                right: 10,
                left: 0,
                bottom: 8
                }}
            />
  </View>
    )
}
