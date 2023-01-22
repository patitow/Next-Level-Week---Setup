import { View } from "react-native";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  if (progress<0)
    progress = 0;
  if (progress>100)
    progress = 100;
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View className="h-3 rounded-xl bg-violet-600" style={{ width: `${progress}%` }}></View>
    </View>
  )
}