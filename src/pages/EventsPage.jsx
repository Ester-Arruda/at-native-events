import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Filter } from "../components/Filter";

import Routes from "../routes";
import ListContainer from "../containers/Events/ListContainer";

function converter(data) {
    const ids = Object.keys(data);
    const events = Object.values(data);
    const eventsList = events.map((event, index) => {
        return {
            _id: ids[index],
            ...event
        }
    });
    return eventsList;
}

export default function EventsPage(props) {
    const { navigation } = props;
    const url = 'https://at-native-events-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterTerm, setFilterTerm] = useState('');

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(eventsJson => {
                const events = converter(eventsJson);
                let updatedEvents = [...events];
                if (filterTerm && filterTerm.length > 0) {
                  const filteredList = filterEvents(updatedEvents);
                  updatedEvents = filteredList;
                }
                else if(filterTerm === '') {
                    setEvents(updatedEvents);
                } 
                setEvents(updatedEvents);
            })
            .finally(_ => setIsLoading(false));
    }, [filterTerm]);
    
    function selectEvent(event) {
        navigation.navigate(Routes.EventsShowPage, { id: event._id });
    }

    const filterEvents = (allEvents) => {
        if (filterTerm.trim() !== '') {
        return allEvents.filter(event =>
            event.name.toLowerCase().includes(filterTerm.toLowerCase())
        );
        } else {
        return allEvents;
        }
    };

    if (isLoading) {
        return <ActivityIndicator />;
    } else {
        return( 
            <>
                <Filter setFilterTerm={setFilterTerm}/>
                <ListContainer events={events} action={selectEvent} />;
            </>
        )
    }
}