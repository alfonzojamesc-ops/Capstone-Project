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
  plot: any; 
};

export const PersonCardOverlay: React.FC<PersonCardOverlayProps> = ({
  visible,
  onClose,
  plot,
}) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 300,
      duration: 300,
      easing: visible ? Easing.out(Easing.ease) : Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  if (!visible) return null;

  const { owner, deceased, status } = plot.data;

  const showOwner = owner && status !== "available";
  const showDeceased = deceased && status !== "available";

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />
      <View
        style={[StyleSheet.absoluteFillObject, styles.container]}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          {!(showOwner || showDeceased) ? (
            <>
              <Text style={styles.errorText}>No details available</Text>
              <Pressable onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </>
          ) : (
            <>
              {showOwner && (
                <>
                  <Text style={styles.sectionTitle}>Owner</Text>
                  <Text style={styles.name}>
                    {owner.first_name} {owner.last_name}
                  </Text>
                </>
              )}

              {showDeceased && (
                <>
                  <Text style={styles.sectionTitle}>Deceased</Text>
                  {deceased.image && (
                    <Image
                      source={{ uri: deceased.image }}
                      style={styles.image}
                    />
                  )}
                  <Text style={styles.name}>
                    {deceased.first_name} {deceased.last_name}
                  </Text>
                  <Text style={styles.detail}>Sex: {deceased.sex}</Text>
                  <Text style={styles.detail}>
                    Date of Birth: {deceased.date_of_birth ?? "Unknown"}
                  </Text>
                  <Text style={styles.detail}>
                    Date of Death: {deceased.date_of_death ?? "Unknown"}
                  </Text>
                </>
              )}

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
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    justifyContent: "flex-end",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
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
