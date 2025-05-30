//NOTE - 記錄登入者是否有訂單紀錄

import { create } from "zustand";
import { persist } from "zustand/middleware";
interface MemberState {
  hasOrderListRecord: boolean;
  setHasOrderListRecord: (value: boolean) => void;
}

const useMemberStore = create<MemberState>()(
  persist(
    (set) => ({
      hasOrderListRecord: false,
      setHasOrderListRecord: (value: boolean) =>
        set({ hasOrderListRecord: value }),
    }),
    {
      name: "petpet-web-member-store", // unique name for localStorage
    },
  ),
);

export default useMemberStore;
