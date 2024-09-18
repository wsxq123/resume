import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

function PicOnlyTemp({
  picList,
  darkBg,
}: {
  picList: string[];
  darkBg: boolean;
}) {
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
    <Box>
      {picList.length > 1 && (
        <>
          <Box position='fixed' top={window.innerHeight / 2}>
            <IconButton
              aria-label='btnIcon'
              color={darkBg ? 'inherit' : 'default'}
              onClick={() => handleBtnClicked(-1)}
            >
              <ArrowBackIosIcon fontSize='large' />
            </IconButton>
          </Box>
          <Box position='fixed' top={window.innerHeight / 2} right='30px'>
            <IconButton
              aria-label='btnIcon'
              color={darkBg ? 'inherit' : 'default'}
              onClick={() => handleBtnClicked(1)}
            >
              <ArrowForwardIosIcon fontSize='large' />
            </IconButton>
          </Box>
        </>
      )}
      <img
        src={picList[currentPic]}
        alt={picList[currentPic]}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </Box>
  );
}

export default PicOnlyTemp;
