import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell align="right">Cases</StyledTableCell>
                        <StyledTableCell align="right">Today Cases</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                        <StyledTableCell align="right">Today Deaths</StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Active</StyledTableCell>
                        <StyledTableCell align="right">Critical</StyledTableCell>
                        <StyledTableCell align="right">Cases PerOneMillion</StyledTableCell>
                        <StyledTableCell align="right">Deaths PerOneMillion</StyledTableCell>
                        <StyledTableCell align="right">Total Tests</StyledTableCell>
                        <StyledTableCell align="right">Tests PerOneMillion</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.details.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.country}
                            </StyledTableCell>

                            <StyledTableCell align="right">{row.cases}</StyledTableCell>
                            <StyledTableCell align="right">{row.todayCases}</StyledTableCell>
                            <StyledTableCell align="right">{row.deaths}</StyledTableCell>
                            <StyledTableCell align="right">{row.todayDeaths}</StyledTableCell>
                            <StyledTableCell align="right">{row.recovered}</StyledTableCell>
                            <StyledTableCell align="right">{row.active}</StyledTableCell>
                            <StyledTableCell align="right">{row.critical}</StyledTableCell>
                            <StyledTableCell align="right">{row.casesPerOneMillion}</StyledTableCell>
                            <StyledTableCell align="right">{row.deathsPerOneMillion}</StyledTableCell>
                            <StyledTableCell align="right">{row.totalTests}</StyledTableCell>
                            <StyledTableCell align="right">{row.testsPerOneMillion}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
