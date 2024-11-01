import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { GroupWithCountI, TableCellI } from "./types";

const levelAtomWithStorage = atomWithStorage<number | null>(
  "levelAtomWithStorage",
  Number(sessionStorage.getItem("levelAtomWithStorage")),
  createJSONStorage(() => sessionStorage)
);

export const levelAtom = atom(
  (get) => get(levelAtomWithStorage),
  (_, set, newValue: number | null) => set(levelAtomWithStorage, newValue)
);
export const restBalloonGroupsAtom = atom<GroupWithCountI[] | null>(null);

export const editedTableAtom = atom<TableCellI[][] | null>(null);

export const gameResultAtom = atom<string | undefined>(undefined);
