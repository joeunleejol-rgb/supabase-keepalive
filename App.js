import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './src/App';
import { useBrandFonts } from './src/hooks/useBrandFonts';
import { brand } from './src/theme';

export default function RootApp() {
  const { loaded } = useBrandFonts();

  if (!loaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={brand.orange} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <App />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brand.ivory,
  },
});
