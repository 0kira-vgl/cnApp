import { User } from "@/components/User";
import { Image, Text, View } from "react-native";

export function Profile() {
  return (
    <View className="h-full bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        className="w-full h-52 -mb-16"
      />

      <User />
    </View>
  );
}
