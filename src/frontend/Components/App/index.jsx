import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import style from './style.css';
import { recordValidation } from '../../Service/inputValidation';

class App extends Component {
    state = {
        recordInputValue: ''
    }

    recordInputOnChangeHandler = (syntEvent) => {
        this.setState({recordInputValue: syntEvent.target.value})
    }

    addRecord = () => {
        const { recordInputValue } = this.state;
        const validatedString = recordValidation(15, true)(recordInputValue);
        if (recordInputValue && validatedString) {
            this.setState({recordInputValue: ''}, () => {
                this.props.addOneRecord(validatedString)
            });
        };
    }

    clearRecords = () => {
        this.setState({recordInputValue: ''}, this.props.clearRecords)
    }

    render() {
        const { records } = this.props;
        const { recordInputValue } = this.state;
        return (
            <MuiThemeProvider>
                <div className={style.uiWrapper}>
                    <Table >
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Records</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                records.map((record, index) =>
                                    <TableRow key={`${record}_${index}`}>
                                        <TableRowColumn>{++index}</TableRowColumn>
                                        <TableRowColumn>{record}</TableRowColumn>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                    <TextField
                        hintText='Type your record'
                        value={recordInputValue}
                        onChange={this.recordInputOnChangeHandler}
                    />
                    <br />
                    <RaisedButton onClick={this.addRecord} label="Add" primary={true} />
                    &emsp;
                    <RaisedButton onClick={this.clearRecords} label="Clear" secondary={true}/>
                </div>
            </MuiThemeProvider>
        )
    }
    componentDidMount() {
        this.props.fetchRecords();
    }
}

export default App;