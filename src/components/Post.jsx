import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { orange, red } from '@mui/material/colors';
import React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = ({ avimg, title, subtime, img, content }) => {
  return (
    <Card sx={{ margin: '20px 5px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={avimg}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="2h"
      />
      <CardMedia
        component="img"
        height="10%"
        image="/p1.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          BREAKING: Japan's former PM Shinzo Abe has died after being shot in
          Nara, local media report. Follow our LIVE blog for the latest:
          <a href="https://aje.io/4ajv2t">https://aje.io/4ajv2t</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
