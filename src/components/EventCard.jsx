import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import askImage from '../../assets/ask.png';


export default function EventCard({ item, action }) {
    const { name, price, images } = item;
    const imgConfig = images && images.length > 0 ? { uri: images[0] } : null;

    return (
        <Pressable onPress={() => action(item)}>
            <View style={styles.container}>
                {imgConfig ? (
                    <Image style={styles.cardImage} source={imgConfig} />
                ) : (
                    <Image style={styles.cardImage} source={askImage} />
                )}
                <View style={styles.cardInfo}>
                    <Text style={styles.listItem}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.listItem}>R$ {price.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBF0FF',
        marginHorizontal: 2,
        marginVertical: 1,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        elevation: 1
    },
    cardImage: {
        width: 100,
        height: 100,
    },
    cardInfo: {
        flexGrow: 1,
    },
    listItem: {
        padding: 4,
        margin: 2,
        color: '#350543',
        fontWeight: 'bold'
    },
    description: {
        width: '50%',
    }
})