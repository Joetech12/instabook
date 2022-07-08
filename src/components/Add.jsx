import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';

const Add = () => {
  const [open, setOpen] = React.useState(false);

  const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '0px',
  });

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{ position: 'fixed', bottom: 30, left: 20 }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={470} height={280} bgcolor={'background.default'} color={'text.primary'} p={5} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center" mb={2}>
            Create Post
          </Typography>
          <UserBox  mb={10}>
            <Avatar src="/me.jpg" sx={{ width: 30, height: 30 }} />
            <Typography variant="span" fontWeight={500}>
              Josiah Emily
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Add your gist"
            variant="standard"
            mt={10}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            mb={3}
          >
            <Button>Post</Button>
            <Button><DateRangeIcon /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
