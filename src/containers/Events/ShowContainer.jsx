import DetailsContainer from './DetailsContainer';
import GalleryContainer from './GalleryContainer';
import HotelsContainer from './HotelsContainer';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export default function ShowContainer(props) {
    const { params } = props.route;
    const { id } = params;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        const url = 'https://at-native-events-default-rtdb.firebaseio.com';
        const resource = 'events';
        fetch(`${url}/${resource}/${id}.json`)
            .then(res => res.json())
            .then(event => {
                setEvent({
                    _id: id,
                    ...event
                });
                setIsLoading(false);
            })
            .catch(error => {
                setMsg("Ocorreu um erro ao tentar carregar este evento.");
                setIsLoading(false);
            });
    }, [id]);

    return (
        <>
            {isLoading ? (<ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff"/>) : 
            event ? 
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name='details'>
                    {() => <DetailsContainer event={event} />}
                </Tabs.Screen>
                <Tabs.Screen name='gallery' component={GalleryContainer}/>
                <Tabs.Screen name='hotels'>
                    {() => <HotelsContainer hotels={event.hotels || []} />}
                </Tabs.Screen>
            </Tabs.Navigator>
            : ( <Text style={styles.noEventText}>{msg}</Text>)}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: 'cover',
    },
    imageController: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    noEventText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
    activityIndicator: {
        marginTop: 50,
    }
})