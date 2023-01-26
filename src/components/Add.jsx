import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Cancel, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
}));

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip
                title="Add Post"
                sx={{ position: "fixed", bottom: 20, left: { xs: "50%", sm: 30 }, right: { xs: "50%" }, }}
                onClick={(e) => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            {/* Modal */}
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5} position="relative" bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant='h6' color='gray' textAlign="center" >Create Post</Typography>

                    <Cancel
                        sx={{ position: 'absolute', top: "10px", left: '90%', color: 'gray', fontSize: "25px", cursor: 'pointer' }}
                        onClick={(e) => setOpen(false)}
                    />

                    <UserBox>
                        <Avatar
                            alt="profil"
                            src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography variant='span' fontWeight={500}>Gael</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />

                    <Stack direction='row' gap={1} mt={1} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup
                        fullWidth
                        variant='contained'
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add;