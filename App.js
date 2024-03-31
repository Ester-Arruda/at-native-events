import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Routes from './src/routes';

import EventsPage from './src/pages/EventsPage';
import AboutPage from './src/pages/AboutPage';
import EventInsertPage from './src/pages/EventInsertPage';
import PhotosPage from './src/pages/PhotosPage';
import ShowContainer from './src/containers/Events/ShowContainer';

const Drawer = createDrawerNavigator();

export default function App() {

  const screensProps = [
    { name: Routes.Home, component: AboutPage, options: { title: 'Sobre o App' } },
    { name: Routes.EventsPage, component: EventsPage, options: { title: 'Eventos' } },
    { name: Routes.EventInsertPage, component: EventInsertPage, options: { title: 'Novo Evento' } },
    { name: Routes.PhotosPage, component: PhotosPage, options: { title: 'Galeria' } },
    {
      name: Routes.EventsShowPage, component: ShowContainer, options: {
        drawerItemStyle: {
          display: 'none'
        },
        drawerLabel: () => null
      }
    },
  ];

  return (
    <NavigationContainer>
      <Drawer.Navigator
        /* screenOptions={{
          headerRight: () => (
            <Button
              title="Voltar"
              onPress={() => { 
                const navigation = useNavigation();
                navigation.goBack();
              }} />
          )
        }} */
      >
        {screensProps.map(
          (props, index) =>
            <Drawer.Screen key={"drawer_screen_" + index} {...props} />
        )
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
