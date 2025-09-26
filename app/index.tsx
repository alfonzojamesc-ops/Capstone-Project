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
    </MyBox>
  );
}
