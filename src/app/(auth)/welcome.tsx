import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-4xl font-bold text-[#176B5B]">Iseni</Text>

      <Text className="mt-4 text-center text-2xl font-semibold">
        Find your next place.
      </Text>

      <Text className="mt-3 text-center text-base text-gray-500">
        Browse rental properties and deal with people you can trust.
      </Text>

      <Pressable
        onPress={() => router.push("/explore")}
        className="mt-10 w-full rounded-2xl bg-[#176B5B] py-4"
      >
        <Text className="text-center font-semibold text-white">
          Get Started
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/phone")} className="mt-5">
        <Text className="text-base text-[#176B5B]">
          Already have an account? Sign in
        </Text>
      </Pressable>
    </View>
  );
}
