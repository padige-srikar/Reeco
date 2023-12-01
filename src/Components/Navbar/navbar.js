import './navbar.css';
import { Box, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, height: '100%', backgroundColor: '#2c4f2c' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', margin: '0px 40px 0px 40px' }}>
                <Stack direction='row' spacing={7}>
                    <Typography sx={{ color: 'white' }}>Reeco</Typography>
                    <Typography sx={{ color: 'white' }}>Store</Typography>
                    <Typography sx={{ color: 'white' }}>Orders</Typography>
                    <Typography sx={{ color: 'white' }}>Analytics</Typography>
                </Stack>
                <div>
                    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <ShoppingCartOutlinedIcon sx={{ color: 'white', transform: 'scaleX(-1)' }} />
                        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            Hello james <KeyboardArrowDownOutlinedIcon />{' '}
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}
