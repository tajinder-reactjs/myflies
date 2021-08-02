import React, { PureComponent } from "react";
import ReactDataSheet from "react-datasheet";
import { Box, Button } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import { grid } from "./data";
import "./style.scss";

class App extends PureComponent {
  state = {
    grid,
  };
  valueRenderer = (cell) => cell.value;
  onCellsChanged = (changes) => {
    const grid = this.state.grid;

    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    this.setState({ grid });
  };
  addRow = () => {
    const { grid } = this.state;
    
    const singleRow = [
      { readOnly: true, value: 2 + 1 },
      { value: "56" },
      { value: "56" },
      { value: "56" },
      { value: "56" },
      { value: "56" },
    ];

    grid.push(singleRow);

    this.setState({ grid: [...grid] });
  };
  addcolumn = () => {
    let { grid } = this.state;
    const headers = { value: "column", readOnly: true };
    const column = { value: "" };

    grid = grid.map((row, index) => {
      if (index === 0) {
        row.push(headers);

        return row;
      }

      row.push(column);
      return row;
    });

    this.setState({ grid: [...grid] });
  };

  render() {
    return (
      <>
        <Box m={10}>
          <Scrollbars style={{ height: 300 }}>
            <ReactDataSheet
              data={this.state.grid}
              className="custom-sheet translate-table-data-grid"
              valueRenderer={this.valueRenderer}
              onCellsChanged={this.onCellsChanged}
              onSelect={this.onSelectCells}
            />
          </Scrollbars>
          <Button onClick={this.addRow}>Add Row</Button>
          <Button onClick={this.addcolumn}>Add column</Button>
        </Box>
      </>
    );
  }
}

export default App;
