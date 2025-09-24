// import { Plus } from "lucide-react";
// import { AnimatePresence, MotiView } from "moti";
// import React, { memo } from "react";
// import { StyleSheet, TouchableOpacity, View } from "react-native";
// import { create } from "zustand";
// import { MyText as Text } from "../my-generic-components";

// // Menu Item Component
// const MenuItem = memo(({ label }: { label: string }) => (
//   <TouchableOpacity style={styles.menuItem}>
//     <Text style={styles.menuText} numberOfLines={1}>
//       {label}
//     </Text>
//   </TouchableOpacity>
// ));

// // FAB Menu Component
// function FabMenu() {
//   const { open, toggle } = useToggle();

//   return (
//     <View style={styles.fabContainer}>
//       {/* Menu Strip */}
//       <AnimatePresence>
//         {open && (
//           <MotiView
//             from={{ opacity: 0, translateY: 20 }}
//             animate={{ opacity: 1, translateY: 0 }}
//             exit={{ opacity: 0, translateY: 20 }}
//             transition={{ type: "timing", duration: 150 }}
//             style={styles.menuWrapper}
//           >
//             <View style={styles.menuList}>
//               <View style={styles.menuItems}>
//                 {["Item One", "Item Two", "Item Three"].map((label, index) => (
//                   <MenuItem key={index} label={label} />
//                 ))}
//               </View>
//             </View>
//           </MotiView>
//         )}
//       </AnimatePresence>

//       {/* FAB Button */}
//       <TouchableOpacity
//         onPress={toggle}
//         activeOpacity={1}
//         style={styles.fabButton}
//       >
//         <MotiView
//           from={{ rotate: "0deg" }}
//           animate={{ rotate: open ? "45deg" : "0deg" }}
//           transition={{ type: "spring", damping: 8, stiffness: 240 }}
//         >
//           <Plus color="#fff" size={24} />
//         </MotiView>
//       </TouchableOpacity>
//     </View>
//   );
// }

// type ToggleState = {
//   open: boolean;
//   toggle: () => void;
// };

// const useToggle = create<ToggleState>((set) => ({
//   open: false,
//   toggle: () => set((state) => ({ open: !state.open })),
// }));

// const styles = StyleSheet.create({
//   fabContainer: {
//     position: "absolute",
//     bottom: 40,
//     right: 20,
//   },
//   fabButton: {
//     backgroundColor: "#6200ee",
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   menuWrapper: {
//     position: "absolute",
//     bottom: 70,
//     right: 0,
//   },
//   menuList: {
//     alignItems: "flex-end",
//   },
//   menuItems: {
//     gap: 6,
//   },
//   menuItem: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 24,
//     backgroundColor: "#eee",
//     alignSelf: "flex-end",
//     maxWidth: "100%",
//   },
//   menuText: {
//     fontSize: 16,
//     color: "#000",
//     textAlign: "right",
//     flexShrink: 1,
//   },
// });
