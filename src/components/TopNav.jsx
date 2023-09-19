import { Box, IconButton, InputBase, Stack, Toolbar, alpha, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useTheme } from '@emotion/react';
// Start Make the Search
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// end Make the Search

// Start make the NavTop
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    // @ts-ignore
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const TopNav = ({ open, handleDrawerOpen, setMode }) => {
    const them = useTheme();

    return (
        <AppBar position="fixed"
            // @ts-ignore
            open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box flexGrow={1} />
                <Stack direction={"row"}>
                    {them.palette.mode === "light" ? (<IconButton aria-label="delete" color='inherit'>
                        <LightModeOutlinedIcon onClick={() => {
                            localStorage.setItem('targetMode', them.palette.mode === "dark" ? "light" : "dark")
                            setMode((/** @type {string} */ prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }} />
                    </IconButton>) : (<IconButton aria-label="delete" color='inherit'>
                        <ModeNightOutlinedIcon onClick={() => {
                            localStorage.setItem('targetMode', them.palette.mode === "dark" ? "light" : "dark")
                            setMode((/** @type {string} */ prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }} />
                    </IconButton>)}
                    <IconButton aria-label="delete" color='inherit'>
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color='inherit'>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color='inherit'>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav
// end make the NavTop