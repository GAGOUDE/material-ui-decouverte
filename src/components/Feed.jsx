import { Box } from '@mui/material';

import Post from './Post';
// import { styled } from '@mui/system';

const Feed = () => {

    return (
        <Box
            flex={4}
            p={2}
            sx={{ marginLeft: "0 !important" }} >
            <Post title="John" image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post title="Jacques" image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post title="Pierre" image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post title="Zach" image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        </Box>
    )
}

export default Feed;