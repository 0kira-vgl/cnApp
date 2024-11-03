import { ReactNode } from "react";
import { View, Text, TextProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type OpitonProps = {
  children: ReactNode;
};

type IconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
};

function Option({ children }: OpitonProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  );
}

function Icon({ icon }: IconProps) {
  return <MaterialIcons name={icon} size={20} color={colors.white} />;
}

function Title({ ...rest }: TextProps) {
  return <Text {...rest} className="text-zinc-50 text-lg flex-1"></Text>;
}

Option.Title = Title;
Option.Icon = Icon;

export { Option };
