import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

function PicOnlyTemp({ picList }: { picList: string[] }) {
  const [currentPic, setCurrentPic] = useState(0);

  function handleBtnClicked(calc: number) {
    if (currentPic + calc < 0) {
      setCurrentPic(picList.length - 1);
      console.log('currentPic + calc:' + (picList.length - 1));
    } else if (currentPic + calc > picList.length - 1) {
      setCurrentPic(0);
      console.log('currentPic + calc:' + 0);
    } else {
      setCurrentPic(currentPic + calc);
      console.log('currentPic + calc:' + (currentPic + calc));
    }
  }

  return (
    <Box display='flex' justifyContent='center'>
      <Box width='10%' display='flex' justifyContent='center'>
        {picList.length > 1 && (
          <Box position='fixed' top={window.innerHeight / 2}>
            <IconButton
              aria-label='btnIcon'
              color='inherit'
              onClick={() => handleBtnClicked(-1)}
            >
              <ArrowBackIosIcon fontSize='large' />
            </IconButton>
          </Box>
        )}
      </Box>
      <img
        src={picList[currentPic]}
        alt={picList[currentPic]}
        style={{ objectFit: 'contain', width: '80%' }}
      />
      <Box width='10%' display='flex' justifyContent='center'>
        {picList.length > 1 && (
          <Box position='fixed' top={window.innerHeight / 2}>
            <IconButton
              aria-label='btnIcon'
              color='inherit'
              onClick={() => handleBtnClicked(-1)}
            >
              <ArrowForwardIosIcon fontSize='large' />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PicOnlyTemp;
