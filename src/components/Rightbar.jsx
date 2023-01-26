import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import RightbarListItems from './RightbarListItems';

const imageData = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "first"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "second"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "third"
    },
]

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" width="300">
                {/* Online Friends */}
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>

                <AvatarGroup max={5}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Agnes" src="" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </AvatarGroup>

                {/* Latest Photos */}
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

                <ImageList sx={{ width: 400 }} cols={3} rowHeight={164}>
                    {imageData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={`${item.img}?w=124&h=124&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=124&h=124&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* Latest Conversations */}
                <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>

                <RightbarListItems />
            </Box>
        </Box>
    )
}

export default Rightbar;