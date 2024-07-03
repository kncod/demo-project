import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWind } from 'nativewind';
import {ClerkProvider} from '@clerk/clerk-expo';
import LoginScreen from './Apps/Screen/LoginScreen';
import { SignedIn } from '@clerk/clerk-expo';
import { SignedOut } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_YWNjdXJhdGUtcG9zc3VtLTgwLmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View className="flex-1  bg-white">
      <SignedIn>
        <Text>you are signed in</Text>
      </SignedIn>
      <SignedOut>
      <LoginScreen/>
      </SignedOut>
      <StatusBar style="auto" />
      
    </View>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
