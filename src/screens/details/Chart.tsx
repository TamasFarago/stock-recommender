import React, {useState} from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import Colors from '../../constants/Colors';
import { _pointData, _stock } from '../../../interfaces';

export function Chart({data, difference, openNote, setOpenNote}: {data: any, difference: number, openNote: boolean, setOpenNote: any}) {
  const [point, setPoint] = useState<any>()

    const onPointPress = (data: _pointData) => {
      setPoint(data)
      setOpenNote(true)
    }

    return (
    <View style={styles.container}>
      {openNote &&
      <View style={{height: 50, width: 100, left: Dimensions.get("window").width - 100 < point.x?  point.x-100 : point.x, top: point? point.y : 0, backgroundColor: '#d1d0d0', position: "absolute", zIndex: 99999999}}>
        <Text style={styles.note}>{point.value.toFixed(2)}</Text>
        <Text style={styles.note}>{data.labels[point.index]}</Text>
      </View>}
     <LineChart
        data={data}
        onDataPointClick={(data: any) => onPointPress(data)}
        width={Dimensions.get("window").width * 1.05}
        height={250}
        yAxisLabel="$"
        withInnerLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        yAxisInterval={1}
        chartConfig={{
          propsForBackgroundLines:{
            stroke: Colors.primary
          },
          backgroundColor: Colors.primary,
          backgroundGradientFrom: Colors.primary,
          propsForVerticalLabels: {fontSize: 9},
          backgroundGradientTo: Colors.primary,
          decimalPlaces: 2, 
          color: () => difference > 0? Colors.green : Colors.red,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "8",
            strokeWidth: "1",
            stroke: "white"
          }
        }}
        bezier
        style={{
          marginTop: 0,
          paddingLeft: 40,
          paddingRight: 10,
        }}
      />
    </View>
  );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      note: {
        fontSize: 12,
        fontWeight: "500",
        margin: 4,
      }
    });

