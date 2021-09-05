import AsyncStorage from '@react-native-community/async-storage';
import i18n from 'i18n-js';

interface HeadersData {
  [key: string]: string;
}

export default async function headers(): Promise<HeadersData> {
  const locale = i18n.currentLocale();
  const items: HeadersData = {
    'Content-Type': 'application/json',
    Locale: locale,
  };
  const token = await AsyncStorage.getItem('token');
  if (token) {
    items.Authorization = `Bearer ${token}`;
  }
  return items;
}
