import { Button, ButtonText } from "@/components/ui/button";
import {
  AddIcon,
  GlobeIcon,
  Icon,
  PlayIcon,
  SettingsIcon,
} from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { StyleSheet } from "react-native";

function MyMenu() {
  return (
    <Menu 
      placement="top"
      offset={5}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} >
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Funeral Services</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
export default MyMenu;

const s = StyleSheet.create({
  button: {
    backgroundColor: "#080e1fff",
  },
  menu: {
    backgroundColor: "#080e1fff",
  },
});
