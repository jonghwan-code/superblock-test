export interface DifficultyI {
  label: string;
  number: number;
}

/**
 * @description
 * val: 테이블 셀의 값 (0 or 1), group: 풍선(1) 셀의 경우 자신이 속한 그룹 (풍선 아닌 경우 null)
 */
export interface TableCellI {
  val: number;
  group: number | null;
}

/**
 * @description
 * group: 연결된 풍선 그룹, count: 해당 그룹의 요소 수
 */
export interface GroupWithCountI {
  group: number;
  count: number;
}
