import { Text, TextProps } from "react-native";

type TitleProps = TextProps & {
  title: string;
};

export function Title({ title, ...rest }: TitleProps) {
  return (
    <Text {...rest} className="text-zinc-50 font-bold text-xl mt-6 mb-2">
      {title}
    </Text>
  );
}
