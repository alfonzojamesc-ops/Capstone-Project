import { sampleData } from "@/constants/sample-data";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type PersonCardOverlayProps = {
  visible: boolean;
  onClose: () => void;
  personId: string;
};

export const PersonCardOverlay: React.FC<PersonCardOverlayProps> = ({
  visible,
  onClose,
  personId,
}) => {
  const person = sampleData.blocks
    .flatMap((block) => block.slots)
    .find((slot) => slot.slot === personId);

  const slideAnim = useRef(new Animated.Value(300)).current; // start offscreen

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null; // don't render modal if not visible

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      {/* Outer Pressable closes overlay when tapping outside */}
      <Pressable style={styles.overlay} onPress={onClose} />
      {/* Animated card */}
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "flex-end",
          borderWidth: 2,
        }}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          {!person ? (
            <>
              <Text style={styles.errorText}>Person not found</Text>
              <Pressable onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Image source={{ uri: person.picture }} style={styles.image} />
              <Text style={styles.name}>{person.name}</Text>
              {/* <Text style={styles.email}>{person.email}</Text> */}
              <Text style={styles.detail}>Age: {person.age}</Text>
              <Text style={styles.detail}>Sex: {person.gender}</Text>
              <Text style={styles.detail}>
                Freed from their mortal coil at:
              </Text>
              <Text style={styles.detail}>
                {person.deathDate.toDateString()}
              </Text>
              <Pressable onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end", // align card to bottom
    padding: 20,
    cursor: "pointer",
    borderWidth: 2,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "grey",
    marginBottom: 10,
    textAlign: "center",
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: "dodgerblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
