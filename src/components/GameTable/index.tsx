import { useGameTable } from "hooks";
import { useAtomValue } from "jotai";
import React, { useCallback } from "react";
import {
  editedTableAtom,
  levelAtom,
  restBalloonGroupsAtom,
} from "store/states";

const GameTable = () => {
  const level = useAtomValue(levelAtom);

  const { removeBalloonGroupHandler } = useGameTable({
    level,
  });
  const restBalloonGroups = useAtomValue(restBalloonGroupsAtom);
  const editedTable = useAtomValue(editedTableAtom);

  const onClick = useCallback(
    (groupId: number | null) => {
      if (restBalloonGroups && groupId) {
        removeBalloonGroupHandler(restBalloonGroups, groupId);
      }
    },
    [restBalloonGroups, removeBalloonGroupHandler]
  );

  return (
    <table className="border-collapse">
      <tbody>
        {editedTable?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map(({ val, group }, cellIndex) => (
              <td
                key={cellIndex}
                className="w-[50px] h-[50px] border-2 text-2xl border-lime-300 text-center cursor-pointer hover:bg-lime-300 active:bg-lime-500"
                onClick={() => onClick(group)}
              >
                {val ? "🎈" : undefined}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default React.memo(GameTable);
