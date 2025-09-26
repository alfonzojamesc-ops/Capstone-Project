import MyLayouter from "@/my/components/my-layouter";
import MyBox from "@/my/components/primitive/my-box";
import MyIcon from "@/my/components/primitive/my-icon";
import MyText from "@/my/components/primitive/my-text";
import cs from "@/my/constants/my-const-styles";
import { CalendarHeartIcon } from "lucide-react";

export default function Index() {
  return (
    <MyBox style={[cs.hvcenter, cs.flex1]}>
      <MyText>Lorem Ipsum</MyText>
      <MyIcon name={CalendarHeartIcon} />
      <MyLayouter style={{ height: 100, width: 150 }}>
        <MyText>Ipsum Lorem</MyText>
      </MyLayouter>
    </MyBox>
  );
}
