import { useState } from 'react';
import { AppBar, Badge, InputBase, Toolbar, Typography, Avatar, Menu, MenuItem, Paper, IconButton } from '@mui/material';
import { Box, styled } from '@mui/system';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';


// Toolbar styled
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

// Icons
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const Navbar = () => {
    const [open, SetOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                {/* Logo Text */}
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>GAGOUDE DEV</Typography>

                {/* Logo Icon */}
                <VolunteerActivismIcon sx={{ display: { xs: "block", sm: "none" } }} />

                {/* Search bar */}

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: 170, md: 400 } }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {/* Icons */}
                <Icons
                    sx={{ cursor: "pointer" }}>
                    <Badge badgeContent={4} color="error">
                        <EmailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar
                        alt="profil"
                        src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        onClick={(e) => SetOpen(true)}
                    />
                </Icons>

                <UserBox
                    sx={{ cursor: "pointer" }}>
                    <Avatar
                        alt="profil"
                        src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        onClick={(e) => SetOpen(true)}
                    />
                    <Typography variant='h6'>Gael</Typography>
                </UserBox>
            </StyledToolbar>

            {/* SubMenu Details */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => SetOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;