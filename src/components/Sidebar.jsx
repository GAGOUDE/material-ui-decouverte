import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, Article, Group, Storefront, Person, AccountBox, Settings, ModeNight, LightMode } from '@mui/icons-material';


const Sidebar = ({ setMode, mode }) => {
    return (
        <Box
            // position="fixed"
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position='fixed'>
                <List>
                    {/* HOME */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* PAGES */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#pages'>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* GROUPS */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#groups'>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* MARKETPLACE */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#marketplace'>
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* FRIENDS */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#friends'>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* Settings */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#setings'>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" sx={{ display: { sm: "none", md: 'block' } }} />
                        </ListItemButton>
                    </ListItem>

                    {/* PROFILE */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#profile'>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" sx={{ display: { sm: "none", md: 'block' } }} s />
                        </ListItemButton>
                    </ListItem>

                    {/* SWITCH */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#profile'>
                            <ListItemIcon>
                                {mode === "light" ? <LightMode /> : <ModeNight />}
                                {/* <ModeNight />
                                <LightMode /> */}
                            </ListItemIcon>

                            <Switch
                                onChange={(e) => setMode(mode === 'light' ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;