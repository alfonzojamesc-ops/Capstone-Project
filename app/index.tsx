import MyBox from "@/my/components/primitive/my-box";
import MyText from "@/my/components/primitive/my-text";
import cs from "@/my/constants/my-const-styles";

export default function Index() {
  return (
    <MyBox style={[cs.hvcenter, cs.flex1]}>
      <MyText>Lorem Ipsum</MyText>
    </MyBox>
  );
}
