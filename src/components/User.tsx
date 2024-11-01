import { View, Text } from "react-native";
import { AvatarImage, AvatarFallback, Avatar } from "./Avatar";

export function User() {
  return (
    <View className="items-center">
      <Avatar className="size-32 border border-gray-600">
        <AvatarImage
          source={{
            uri: "https://github.com/0kira-vgl.png",
          }}
        />
        <AvatarFallback>MT</AvatarFallback>
      </Avatar>

      <Text className="text-zinc-50 font-bold text-2xl mt-4">
        Matheus Tiburcio
      </Text>
      <Text className="text-gray-400 text-lg">@0kira-vgl</Text>
    </View>
  );
}
