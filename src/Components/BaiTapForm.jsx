import React, { Component } from "react";
import { Button } from "../StyledComponents/Button";
import { Table, Tbody, Td, Th, Thead, Tr } from "../StyledComponents/Table";
import { TextField } from "../StyledComponents/TextField";
import { ThemeProvider } from "styled-components";
import { PrimaryTheme } from "../Theme/PrimaryTheme";
import { P } from "../StyledComponents/P";
import { LightTheme } from "../Theme/LightTheme";
import { DarkTheme } from "../Theme/DarkTheme";
import { H2 } from "../StyledComponents/H2";

import { ContainerFluid } from "../StyledComponents/Container";
import FormSinhVien from "./FormSinhVien";
import { connect } from "react-redux";
import TableList from "./TableList";

class BaiTapForm extends Component {

    render() {
        let { currentTheme } = this.props;
        return (
            <ThemeProvider theme={currentTheme}>
                <ContainerFluid className="py-3">
                    <FormSinhVien />
                    <TableList />
                </ContainerFluid>
            </ThemeProvider>
        );
    }
}
const mapStateToProps = (state) => ({
    currentTheme: state.FormReducer.currentTheme,
});
export default connect(mapStateToProps)(BaiTapForm);


