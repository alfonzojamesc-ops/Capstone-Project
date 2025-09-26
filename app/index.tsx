import MyLayouter from "@/my/components/my-layouter";
import MyBox from "@/my/components/primitive/my-box";
import MyIcon from "@/my/components/primitive/my-icon";
import MyPressable from "@/my/components/primitive/my-pressable";
import MyText from "@/my/components/primitive/my-text";
import MyTouchableOpacity from "@/my/components/primitive/my-touchableopacity";
import cs from "@/my/constants/my-const-styles";
import { CalendarHeartIcon } from "lucide-react";

export default function Index() {
  return (
    <MyBox style={[cs.hvcenter, cs.flex1]}>
      <MyText>Lorem Ipsum</MyText>
      <MyIcon name={CalendarHeartIcon} />
      <MyLayouter style={{ height: 100, width: 150 }}>
        <MyText>Ipsum Lorem</MyText>
        <MyPressable label="button2" onPress={() => console.log("hello")} />
        <MyTouchableOpacity onPress={() => console.log("hello opacity")} />
        <MyPressable label="button2" onPress={() => console.log("hello Icon")}>
          <MyIcon name={CalendarHeartIcon} />
        </MyPressable>
        <MyTouchableOpacity onPress={() => console.log("hello opacity Icon")}>
          <MyIcon name={CalendarHeartIcon} />
        </MyTouchableOpacity>
      </MyLayouter>
    </MyBox>
  );
}
