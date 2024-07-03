import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useOAuth } from "@clerk/clerk-expo";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the browser to improve UX
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
      });

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Handle other flows like signIn or signUp
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);

  return (
    <View>
      <View>
        <Image
          source={require("./../../assets/images/home.jpg")}
          style={{ width: "100%", height: 400, resizeMode: "cover" }}
        />
        <View
          style={{
            padding: 16,
            backgroundColor: "white",
            marginTop: -20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowOpacity: 0.5,
          }}
        >
          <Text style={{ fontSize: 30 }}>RentEase Marketplaces</Text>
          <Text style={{ fontSize: 18, color: "slategray", marginTop: 6 }}>
            Buy Sell Marketplace where you can sell old items and make real
            money
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              padding: 16,
              backgroundColor: "blue",
              borderRadius: 50,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInWithOAuth;

