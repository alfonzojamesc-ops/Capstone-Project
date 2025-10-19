import { router } from "expo-router";

export function back(path) {
  if (router.canGoBack()) {
    router.dismissTo(path);
  } else {
    router.replace(path);
  }
}
