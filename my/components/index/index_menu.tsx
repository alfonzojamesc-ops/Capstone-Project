import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem } from "@/components/ui/menu";
import { Text } from "@/components/ui/text";
import {
  Calendar1,
  Menu as LucideMenu,
  MapPinCheckInside,
  Phone,
} from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const FABSize = "xl"; // gluestack text size token
const FABIconSize = 24;
const FABStyle = "rounded-full";

const FABIcon = <LucideMenu size={FABIconSize} />;
const FABText = "Inquire";

const menuStyle = "bg-transparent border-0 shadow-0 gap-2 items-end"; // gluestack tailwind
const menuStripPlacement = "top right"; // gluestack placement token
const menuStripOffset = 20;

// TODO: make item lists hug their child's width
const menuItemStyle =
  "p-4 rounded-full bg-secondary-0 border border-primary-950 gap-4 w-fit min-w-[50px]";
const menuItemTextSize = "lg";
const menuItemTextAlignment = "right";

// do not manually style texts, they will detach from base theme
const itemsIconSize = 24;
const item1Icon = <MapPinCheckInside size={itemsIconSize} />;
const item1 = "Reserve a Slot";
const item2Icon = <Calendar1 size={itemsIconSize} />;
const item2 = "Book an Appointment";
const item3Icon = <Phone size={itemsIconSize} />;
const item3 = "Contact Us";

export function IndexMenu() {
  return (
    <Menu
      placement={menuStripPlacement}
      className={menuStyle}
      offset={menuStripOffset}
      trigger={({ ...triggerProps }) => {
        return (
          <Button
            {...triggerProps}
            size={FABSize}
            className={FABStyle}
            action="secondary"
          >
            {FABIcon}
            <ButtonText>{FABText}</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key={item1} className={menuItemStyle}>
        {item1Icon}
        <Text size={menuItemTextSize} style={s.menuItemLabel}>
          {item1}
        </Text>
      </MenuItem>
      <MenuItem key={item2} className={menuItemStyle}>
        {item2Icon}
        <Text size={menuItemTextSize} style={s.menuItemLabel}>
          {item2}
        </Text>
      </MenuItem>
      <MenuItem key={item3} className={menuItemStyle}>
        {item3Icon}
        <Text size={menuItemTextSize} style={s.menuItemLabel}>
          {item3}
        </Text>
      </MenuItem>
    </Menu>
  );
}

const s = StyleSheet.create({
  menuItemLabel: {
    flex: 1,
    textAlign: menuItemTextAlignment,
  },
});
