import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator } from "react-native";
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function EventInsertPage() {
    const url = 'https://at-native-events-default-rtdb.firebaseio.com';
    const resource = 'events';

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [dateDay, setDateDay] = useState("1");
    const [dateMonth, setDateMonth] = useState("1");
    const [dateYear, setDateYear] = useState("2024");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dias = [];
    const meses = [];
    const anos = [];

    for (let i = 1; i <= 31; i++) {
        dias.push({ value: i, label: i });
    }
    for (let i = 1; i <= 12; i++) {
        meses.push({ value: i, label: i });
    }
    for (let i = 2000; i <= 3000; i++) {
        anos.push({ value: i, label: i });
    }

    const getMsgColor = () => {
        if (msg.includes('Evento cadastrado com sucesso')) {
            return '#BFF49F';
        } else {
            return '#FF9352';
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Nome"
            />

            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="Descrição"
            />

            <TextInput
                style={styles.input}
                value={location}
                onChangeText={(text) => setLocation(text)}
                placeholder="Localização"
            />

            <View style={styles.dateInputContainer}>
                <Text>Dia: </Text>
                <Picker style={{width: 100}}
                    selectedValue={dateDay}
                    onValueChange={setDateDay}>
                    {dias.map(
                        (dia, index) =>
                            <Picker.Item
                                key={'picker_item_day_' + index}
                                {...dia} />
                    )}
                </Picker>
                <Text>Mês: </Text>
                <Picker style={{width: 100}}
                    selectedValue={dateMonth}
                    onValueChange={setDateMonth}>
                    {meses.map(
                        (mes, index) =>
                            <Picker.Item
                                key={'picker_item_month_' + index}
                                {...mes} />
                    )}
                </Picker>
                <Text>Ano: </Text>
                <Picker style={{flex: 1}}
                    selectedValue={dateYear}
                    onValueChange={setDateYear}>
                    {anos.map(
                        (ano, index) =>
                            <Picker.Item
                                key={'picker_item_year_' + index}
                                {...ano} />
                    )}
                </Picker>
            </View>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={(text) => setPrice(text)}
                placeholder="Preço"
                keyboardType="numeric"
            />
            <Pressable
                style={styles.btn}
                onPress={() => {
                    setIsLoading(true);
                    const newEvent = {
                        name: name,
                        description: description,
                        location: location,
                        date: new Date(dateYear, dateMonth, dateDay),
                        price: Number.parseFloat(price),
                    }
                    fetch(`${url}/${resource}.json`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newEvent),
                    })
                    .then(res => res.json())
                    .then(json => setMsg("Evento cadastrado com sucesso"))
                    .catch(error => setMsg("Ocorreu um erro ao tentar cadastrar o evento"))
                    .finally(() => setIsLoading(false));
                }}>
                <Text style={styles.btnLabel}>Salvar</Text>
            </Pressable>
            {isLoading && <ActivityIndicator />}
            {msg && 
                <View style={[styles.containerMsg, {backgroundColor: getMsgColor()}]}>
                    <Text>{msg}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    input: {
        marginHorizontal: 10,
        marginVertical: 2,
        backgroundColor: '#F5D5FF',
        height: 40,
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    dateInputPicker: {
        flex: 1,
    },
    btn: {
        backgroundColor: '#DC8FF3',
        margin: 10,
        padding: 10,
    },
    btnLabel: {
        fontSize: 20,
        fontWeight: "900",
        textAlign: 'center',
        color: '#350543',
    },
    containerMsg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 10
    }
});
