import { useEffect, useState } from "react";
import { useKitchen } from "@/store/kitchen";

export function useKitchenReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const persistApi = useKitchen.persist;
    if (persistApi.hasHydrated()) {
      setReady(true);
      return;
    }
    const unsub = persistApi.onFinishHydration(() => setReady(true));
    void persistApi.rehydrate();
    return unsub;
  }, []);
  return ready;
}
