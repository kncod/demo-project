import { View, Text,Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
        <Image source={require('./../../assets/images/home.jpg')}
        className="w-full h-[400px] object-cover"
        />
       <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
            <Text className="text-[30px]">RentEase Marketplace</Text>
            <Text className="text-[18px] text-slate-500 mt-6">Buy Sell Merketplace where you can sell old item and make real money</Text>
        <TouchableOpacity onPress={()=>console.log("SignIn")} className="p-4  bg-blue-500 rounded-full mt-20">
            <Text className="text-white text-center text-[18px]">Get Started</Text>
    </TouchableOpacity>
        </View>

    </View>
  )
}