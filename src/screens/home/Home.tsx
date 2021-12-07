import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, TextInput, Dimensions } from 'react-native'
import { Header } from '../../components'
import Colors from '../../constants/Colors'
import { StockList } from '..'
import { data as generatedData } from '../../data'
import { _data } from '../../../interfaces'

export function Home({navigation}: {navigation: any}) {
    const [inputValue, setInputValue] = useState<string>("")
    const [data, setData] = useState<any>(generatedData)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
        <View style={{paddingHorizontal: 16,  height: Dimensions.get("window").height}}>
            <Header navigation={navigation}/>
            <TextInput 
                value={inputValue}
                onChangeText={(text: string) => setInputValue(text)}
                style={styles.input}
                placeholder={"Search for a stock"}
                placeholderTextColor={"rgba(255,255,255,0.5)"}
                />
            <StockList navigation={navigation} inputValue={inputValue} data={data}/>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.7)",
        color: "white",
        fontSize: 16,
    }
})
