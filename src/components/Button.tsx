import { Pressable, PressableProps, Text, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonProps = PressableProps &
  TextProps & {
    title: string;
  };

export function Button({
  title,
  className,
  ...rest
}: ButtonProps & { className?: string }) {
  return (
    <Pressable
      {...rest}
      className={twMerge(
        "w-full justify-center items-center bg-green-500 h-14 rounded-md active:opacity-80",
        className
      )}
    >
      <Text {...rest} className={twMerge("text-lg font-bold", className)}>
        {title}
      </Text>
    </Pressable>
  );
}
