import { useCallback, useMemo } from "react";
import { GroupWithCountI, TableCellI } from "store/types";
import {
  editedTableAtom,
  gameResultAtom,
  restBalloonGroupsAtom,
} from "store/states";
import { useAtom, useSetAtom } from "jotai";

interface UseGameTableProps {
  level: number | null;
}

export const useGameTable = ({ level }: UseGameTableProps) => {
  const [editedTable, setEditedTable] = useAtom(editedTableAtom);
  const [restBalloonGroups, setRestBalloonGroups] = useAtom(
    restBalloonGroupsAtom
  );
  const setIsGameResult = useSetAtom(gameResultAtom);

  const generateRandomTable = useCallback((size: number) => {
    const array = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(Math.floor(Math.random() * 2));
      }
      array.push(row);
    }
    return array;
  }, []);

  const gameTable = useMemo(
    () => generateRandomTable(level as number),
    [generateRandomTable, level]
  );

  const gameTableWithGroup: TableCellI[][] = useMemo(() => {
    return Array.from({ length: gameTable.length }, () =>
      Array(gameTable.length).fill({ val: 0, group: null })
    );
  }, [gameTable.length]);

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isValid = (x: number, y: number, visited: boolean[][]): boolean => {
    return (
      x >= 0 &&
      x < gameTable.length &&
      y >= 0 &&
      y < gameTable[0].length &&
      !visited[x][y] &&
      gameTable[x][y] === 1
    );
  };

  const dfs = (
    x: number,
    y: number,
    visited: boolean[][],
    groupId: number
  ): number => {
    visited[x][y] = true;
    gameTableWithGroup[x][y] = { val: 1, group: groupId };
    let count = 1;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValid(newX, newY, visited)) {
        count += dfs(newX, newY, visited, groupId);
      }
    }

    return count;
  };

  const visited: boolean[][] = Array.from({ length: gameTable.length }, () =>
    Array(gameTable[0].length).fill(false)
  );

  const groups: number[] = [];

  for (let i = 0; i < gameTable.length; i++) {
    for (let j = 0; j < gameTable.length; j++) {
      if (gameTable[i][j] === 1 && !visited[i][j]) {
        const groupId = groups.length + 1;
        const groupSize = dfs(i, j, visited, groupId);
        groups.push(groupSize);
      }
    }
  }

  const balloonGroupWithCount: GroupWithCountI[] = groups.map(
    (count, index) => ({
      group: index + 1,
      count,
    })
  );

  const maxCount =
    restBalloonGroups &&
    Math.max(...restBalloonGroups.map((item: GroupWithCountI) => item.count));

  const removeBalloonGroupHandler = (
    data: GroupWithCountI[],
    groupId: number | null
  ) => {
    const element = data.find(
      (item: GroupWithCountI) => item.group === groupId
    );

    if (element) {
      if (restBalloonGroups?.length === 1) {
        setIsGameResult("success");
      }
      if (editedTable && element.count === maxCount) {
        const updatedTable = editedTable.map((sublist) =>
          sublist.map((item) => {
            if (item.group === element.group) {
              return { ...item, val: 0 };
            }
            return item;
          })
        );
        setEditedTable(updatedTable);
        setRestBalloonGroups(
          data.filter((item: GroupWithCountI) => item.group !== groupId)
        );
      } else {
        setIsGameResult("fail");
      }
    }
  };

  return {
    balloonGroupWithCount,
    gameTableWithGroup,
    removeBalloonGroupHandler,
  };
};
