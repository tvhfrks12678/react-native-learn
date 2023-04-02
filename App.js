import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  const { t } = useTranslation();
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked' + ref.current + ' times!');
  }
  return (
    <View style={style.container}>
      <Button title="Click me!" onPress={handleClick} />
      <Text>{t('Welcome to React')}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
