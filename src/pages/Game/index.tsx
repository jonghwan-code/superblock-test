import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  editedTableAtom,
  levelAtom,
  restBalloonGroupsAtom,
} from "store/states";
import { useGameTable } from "hooks";
import GameTable from "components/GameTable";
import GameResultModal from "components/GameResultModal";

export const Game = () => {
  const level = useAtomValue(levelAtom);
  const { balloonGroupWithCount, gameTableWithGroup } = useGameTable({
    level,
  });
  const setRestBalloonGroups = useSetAtom(restBalloonGroupsAtom);
  const setEditedTable = useSetAtom(editedTableAtom);

  useEffect(() => {
    setRestBalloonGroups(balloonGroupWithCount);
    setEditedTable(gameTableWithGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <GameTable />
      <GameResultModal />
    </div>
  );
};
