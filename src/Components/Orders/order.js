import { Box, Stack, Button, Divider, TextField } from '@mui/material';
import Table from '../Table/table';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BalanceIcon from '@mui/icons-material/Balance';
import LiquorIcon from '@mui/icons-material/Liquor';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CakeIcon from '@mui/icons-material/Cake';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

export default function Orders() {
    return (
        <Box sx={{ flexGrow: 1, height: '100%' }}>
            <Box sx={{ height: '95px', boxShadow: '0px 5px #bac1c08c' }}>
                <Box sx={{ marginLeft: '42px', height: '43%', display: 'flex', alignItems: 'center' }}>
                    <Stack direction={'row'} spacing={1}>
                        <span>orders</span>
                        <ArrowForwardIosOutlinedIcon sx={{ fontSize: '16px' }} />
                        <span style={{ textDecoration: 'underline 2px lightgrey' }}>order 327485ABC</span>
                    </Stack>
                </Box>
                <Box sx={{ margin: '0px 42px 0px 42px', height: '55%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '28px', fontStyle: 'bold' }}>Order 327485ABC</span>
                    <Box>
                        <Stack direction={'row'} spacing={3}>
                            <Button variant='outlined' sx={{ borderRadius: '30px', width: '75px', color: '#2c4f2c', borderColor: '#2c4f2c' }}>
                                Back
                            </Button>
                            <Button variant='contained' sx={{ borderRadius: '20px', color: 'white', backgroundColor: '#2c4f2c' }}>
                                Approve Order
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '125px',
                    border: '1px solid lightgrey',
                    borderRadius: '15px',
                    margin: '20px 42px 20px 42px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                }}>
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Supplier</div>
                        <div style={{ width: '120px', fontWeight: 'bold' }}>East coast fruits & vegetables</div>
                    </Stack>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ marginTop: '15px', borderRightWidth: 'medium' }} />
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Shipping date</div>
                        <div style={{ fontWeight: 'bold' }}>Thus, Feb 10</div>
                    </Stack>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ marginTop: '15px', borderRightWidth: 'medium' }} />
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Total</div>
                        <div style={{ fontWeight: 'bold' }}>$ 15,028.3</div>
                    </Stack>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ marginTop: '15px', borderRightWidth: 'medium' }} />
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Category</div>
                        <div style={{ color: 'grey', fontSize: '15px' }}>
                            {' '}
                            <Stack direction={'row'} spacing={0.8}>
                                <CoffeeIcon sx={{ fontSize: '13px' }} />
                                <LiquorIcon sx={{ fontSize: '13px' }} />
                                <AcUnitIcon sx={{ fontSize: '13px' }} />
                                <BalanceIcon sx={{ fontSize: '13px' }} />
                            </Stack>
                            <Stack direction={'row'} spacing={0.8}>
                                <LocalFloristIcon sx={{ fontSize: '13px' }} />
                                <SingleBedIcon sx={{ fontSize: '13px' }} />
                                <EnergySavingsLeafIcon sx={{ fontSize: '13px' }} />
                                <CakeIcon sx={{ fontSize: '13px' }} />
                            </Stack>{' '}
                        </div>
                    </Stack>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ marginTop: '15px', borderRightWidth: 'medium' }} />
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Department</div>
                        <div style={{ fontWeight: 'bold' }}> 3000-444-467</div>
                    </Stack>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ marginTop: '15px', borderRightWidth: 'medium' }} />
                <Box>
                    <Stack spacing={0.8} sx={{ height: '50px' }}>
                        <div style={{ color: 'grey', display: 'flex', fontWeight: 'bold' }}>Status</div>
                        <div style={{ fontWeight: 'bold', width: '120px' }}>Waiting for your approval</div>
                    </Stack>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '370px',
                    maxHeight: '480px',
                    //overflowY: 'auto',
                    border: '1px solid lightgrey',
                    borderRadius: '15px',
                    margin: '20px 42px 20px 42px',
                    // display: 'flex',
                    // justifyContent: 'space-between',
                    // alignItems: 'center',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    // overflow: 'scroll',
                }}>
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '15px', alignItems: 'center' }}>
                        <TextField
                            variant='outlined'
                            placeholder='Search...'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderRadius: '20px',
                                    height: '35px',
                                    width: '155%',
                                },
                            }}
                        />
                        <Stack direction={'row'} spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant='outlined' sx={{ borderRadius: '30px', width: '75%', color: '#2c4f2c', borderColor: '#2c4f2c' }}>
                                Add Items
                            </Button>
                            <LocalPrintshopOutlinedIcon sx={{ borderColor: '#2c4f2c' }} />
                        </Stack>
                    </Box>
                </>
                <>
                    <Box>
                        <Table />
                    </Box>
                </>
            </Box>
        </Box>
    );
}
