import { View } from "react-native";
import { Title } from "./Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title title="Skills" />

      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
}
