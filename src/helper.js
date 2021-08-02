export const DEFAULT_COL = {
  label: "", // For Header Cell
  value: "", // For Data Cell
  width: 150,
  dataType: "alphanumeric",
};

const INITIAL_COLS = 6;
const INITIAL_ROWS = 10;

/**
 * Get Initial Headers to create Source Table
 *
 * @return {Array}
 */
export function getInitialHeaders() {
  const headers = [];

  for (let i = 0; i < INITIAL_COLS; i++) {
    headers.push({ ...DEFAULT_COL, label: `Column ${i}` });
  }

  return headers;
}

/**
 * Get Initial Rows to create Source Table
 *
 * @return {Array}
 */
export function getInitialData() {
  const data = [];

  for (let i = 0; i < INITIAL_ROWS; i++) {
    if (!data[i]) data.push([]);

    for (let j = 0; j < INITIAL_COLS; j++) {
      data[i].push({ ...DEFAULT_COL });
    }
  }

  return data;
}
