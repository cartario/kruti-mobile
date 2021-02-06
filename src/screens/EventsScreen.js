import React from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Operations } from '../store/operations/events';
import AppLoader from '../components/AppLoader';
import Event from '../components/Event';

const EventsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items: events, isLoaded } = useSelector(({ events }) => events);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      dispatch(Operations.fetchItems());      
      setRefreshing(false)
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const handleOpen = (event) => {
    navigation.navigate('Event', {
      eventId: event.id,
      eventBooked: event.booked,
      eventTitle: event.title,
    });
  };

  React.useEffect(() => {
    dispatch(Operations.fetchItems());
  }, []);

  if (isLoaded) {
    return <AppLoader />;
  }

  if (!events.length) {
    return (
      <View style={styles.center}>
        <Text>no events</Text>
      </View>
    );
  }

  return (<>
  
    <View style={styles.wrap}>
      
      <FlatList
        keyExtractor={(item) => item.id}
        data={events}
        renderItem={({ item }) => <Event event={item} onOpen={()=>handleOpen(item)}/>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View></>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  wrap: {
    padding: 10
  },
  noEvents: {
    justifyContent: 'center',
  },
});
