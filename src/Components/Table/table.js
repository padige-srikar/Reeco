import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Paper, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, IconButton } from '@mui/material';
import { approveItem, missingItem } from '../../redux/itemsSlice';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { map as _map } from 'lodash-es';

const Table = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.list);
    const [isClicked, setIsClicked] = useState(false);

    const handleApprove = (rowInd, row) => {
        console.log(row, 'row', 'handleApprove');
        dispatch(approveItem({ id: rowInd, updatedItem: { ...row, status: 'Approved' } }));
        setIsClicked(!isClicked);
    };

    const handleMissing = (rowInd, row) => {
        console.log(rowInd, 'id', 'handleMissing');
        dispatch(missingItem({ id: rowInd, updatedItem: { ...row, status: 'Missing' } }));
        setIsClicked(!isClicked);
    };

    const columns = [
        { field: 'productName', name: 'Product name' },
        { field: 'brand', name: 'Brand' },
        { field: 'price', name: 'Price' },
        { field: 'quantity', name: 'Quantity' },
        { field: 'total', name: 'Total' },
        { field: 'status', name: 'Status' },
        {
            field: 'actions',
            align: 'left',
            width: '30px',
            sort: false,
            search: false,
            cellTemplate: (row, cellValue, rowInd, handleApprove, handleMissing) => {
                return (
                    <Box display='flex' justifyContent='space-between' sx={{ alignItems: 'center' }}>
                        <IconButton onClick={() => handleApprove(rowInd, row)}>
                            <DoneIcon sx={{ color: row.status === 'Approved' ? 'green' : 'grey', fontSize: '15px' }} />
                        </IconButton>
                        <IconButton onClick={() => handleMissing(rowInd, row)}>
                            <ClearIcon sx={{ color: row.status === 'Missing' ? 'red' : 'grey', fontSize: '15px' }} />
                        </IconButton>
                        <IconButton variant='outlined' sx={{ fontSize: '15px' }}>
                            Edit
                        </IconButton>
                    </Box>
                );
            },
        },
    ];
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 500, width: 800, overflow: 'scroll', maxHeight: '150%' }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {_map(columns, column => {
                            // const cellWidth = column.width || 150;
                            return (
                                <TableCell
                                    key={column.id}
                                    align='left'
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'gray',
                                        p: '0px 20px',
                                        height: '40px',
                                        fontSize: '14px',
                                        maxHeight: '40px',
                                        // zIndex: 11,
                                    }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <TableSortLabel>{column.name}</TableSortLabel>
                                    </Box>
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_map(items, (row, rowInd) => {
                        return (
                            <TableRow>
                                {_map(columns, (column, columnInd) => {
                                    const cellValue = row[columns[columnInd].field || columns[columnInd].label];
                                    const cellWidth = columns[columnInd].width || 130;
                                    return (
                                        <TableCell
                                            key={column.label}
                                            align='left'
                                            sx={{
                                                p: '0px 20px',
                                                height: '36px',
                                                maxHeight: '36px',
                                                cursor: 'pointer',
                                                width: cellWidth,
                                                minWidth: cellWidth,
                                                maxWidth: cellWidth,
                                                fontSize: '14px',
                                            }}
                                            onClick={() => (columns[columnInd].onCellClick ? columns[columnInd].onCellClick(row, cellValue) : null)}>
                                            <>{columns[columnInd].cellTemplate ? columns[columnInd].cellTemplate(row, cellValue, rowInd, handleApprove, handleMissing) : cellValue}</>
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

export default Table;
