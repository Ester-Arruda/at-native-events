import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";
import HotelCard from "../../components/HotelCard";

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;

export default function HotelsContainer({ hotels }) {
    return(
        <View>
            {hotels.length > 0 ? (
                <FlatList
                    data={hotels}
                    renderItem={
                        ({ item }) => <HotelCard hotel={item} />
                    }
                    keyExtractor={item => 'hotel_' + item.name}
                />
            ) : (
                <Text style={styles.noImageText}>Não há hotéis cadastrados no momento</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    photoContainer: {
        margin: 2,
        width: screenWidth / numColumns - 4,
        height: screenWidth / numColumns - 4,
        backgroundColor: '#ccc',
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
    noImageText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray'
    }
});