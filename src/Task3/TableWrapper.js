import React, { Component } from "react";
import PropTypes from "prop-types";
import TableWithPropType from "./TableWithPropType";
import Row from "./Row";
import Cell from "./Cell";
import { ThemeContext } from "./context_helper";
import "./button.css";

import Button from "./button";
import Something from "./smsng";

export default class TableWrapper extends Component {
  state = {
    theme: "red",
  };

  changeTheme = (theme) => (_) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    const { changeTheme } = this;
    return (
      <div>
        <ThemeContext.Provider
          value={{
            theme,
            changeTheme,
          }}>
          <Something />
          <header>
            <Button action={changeTheme("red")}>Red</Button>
            <Button action={changeTheme("blue")}>Blue</Button>
            <Button action={changeTheme("green")}>Green</Button>
          </header>
        </ThemeContext.Provider>
        <TableWithPropType>
          <Row head="true">
            <Cell type="">#</Cell>
            <Cell type="date">Current deta</Cell>
            <Cell type="number">Total amount</Cell>
            <Cell type="money" currency="$">
              Salary in $
            </Cell>
          </Row>

          <Row>
            <Cell type="" background="red">
              просто ред
            </Cell>
            <Cell type="date">Data+Курсив</Cell>
            <Cell type="number">Число</Cell>
            <Cell type="money" currency="$">
              money+currency
            </Cell>
          </Row>
        </TableWithPropType>
      </div>
    );
  }
}
