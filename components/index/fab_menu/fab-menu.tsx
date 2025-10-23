import { useState } from "react";
import { ButtonFab } from "./button-fab";
import { ListFabMenu } from "./list-fab-menu";

const MyFabMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <ButtonFab onToggle={setOpenMenu} />
      <ListFabMenu visible={openMenu} />
    </>
  );
};

export default MyFabMenu;
