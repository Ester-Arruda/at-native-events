import { FlatList, ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import askImage from '../../../assets/ask.png';

export default function DetailsContainer({ event }) {
    const { name, description, images, location, date, price } = event;

    function converterData(timestamp) {
        const data = new Date(timestamp);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;
        return dataFormatada;
    }

    return (
        <View style={styles.container}>
            {images && images.length > 0 ? (
                <FlatList
                    horizontal
                    data={images}
                    renderItem={({ item }) => (
                        <Image style={{height: 200, width: 200, margin: 10}} source={{ uri: item }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <Image style={styles.cardImage} source={askImage} />
            )}
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{name}</Text>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.containerContent}>
                        <Text>{description}</Text>
                    </View>
                </View> 
                <View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>Local</Text>
                    </View>
                    <View style={styles.containerContent}>
                        <Text>{location}</Text>
                    </View>
                </View> 
                <View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>Data</Text>
                    </View>
                    <View style={styles.containerContent}>
                        <Text>{converterData(date)}</Text>
                    </View>
                </View> 
                <View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>Valor</Text>
                    </View>
                    <View style={styles.containerContent}>
                        <Text>{price.toFixed(2)}R$</Text>
                    </View>
                </View> 
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        margin: 4,
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#F5D5FF',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#350543',
    },
    description: {
        padding: 15,
    },
    containerContent: {
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});