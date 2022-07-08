import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <Box flex={4} p={0}>
      <Post
        avimg="/p1b.jpg"
        title="Al Jazeera English"
        subtime="2h"
        img="/p1.png"
        content="BREAKING: Japan's former PM Shinzo Abe has died after being shot in Nara, local media report."
      />
      <Post
        avimg="/p1b.jpg"
        title="Al Jazeera English"
        subtime="2h"
        img="/p1.png"
        content="BREAKING: Japan's former PM Shinzo Abe has died after being shot in Nara, local media report."
      />
      <Post
        avimg="/p1b.jpg"
        title="Al Jazeera English"
        subtime="2h"
        img="/p1.png"
        content="BREAKING: Japan's former PM Shinzo Abe has died after being shot in Nara, local media report."
      />
      
      
    </Box>
  );
};

export default Feed;
