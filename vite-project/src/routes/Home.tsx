import HomeBGPng from '@assets/home/homeBG.png';
import { Box, Button } from '@mui/material';
import Wanted from '@src/components/home/Wanted';
import Book from '@src/components/home/Book';
// import Lock from '@src/components/home/Lock';
// import BachelorCap from '@src/components/secondFloor/BachelorCap';
import Wrench from '@src/components/home/Wrench';
import Globe from '@src/components/home/Globe';
import Briefcase from '@src/components/home/Briefcase';
import WantedPng from '@assets/home/wanted.png';
import BookPng from '@assets/home/book.png';
// import LockPng from '@assets/home/lock.png';
// import BachelorCapPng from '@assets/home/bachelorCap.png';
import WrenchPng from '@assets/home/wrench.png';
import GlobePng from '@assets/home/globe.png';
import BriefcasePng from '@assets/home/briefcase.png';
import { useState } from 'react';

function Home() {
  const [isOpened, setIsOpened] = useState<number | null>(null);

  const handleOpenComponent = (id: number) => {
    setIsOpened(id);
  };

  const handleCloseComponen = () => {
    setIsOpened(null);
  };

  const objectParam = [
    {
      id: 0,
      img: WantedPng,
      positionL: '350px',
      positionT: '180px',
      widthSize: '150px',
      component: <Wanted open={isOpened === 0} onClose={handleCloseComponen} />,
    },
    {
      id: 1,
      img: BookPng,
      positionL: '70px',
      positionT: '340px',
      widthSize: '150px',
      component: <Book open={isOpened === 1} onClose={handleCloseComponen} />,
    },
    // {
    //   id: 2,
    //   img: LockPng,
    //   positionL: '820px',
    //   positionT: '390px',
    //   widthSize: '35px',
    //   component: <Lock open={isOpened === 2} onClose={handleCloseComponen} />,
    // },
    // {
    //   id: 3,
    //   img: BachelorCapPng,
    //   positionL: '1000px',
    //   positionT: '160px',
    //   widthSize: '100px',
    //   component: (
    //     <BachelorCap open={isOpened === 3} onClose={handleCloseComponen} />
    //   ),
    // },
    {
      id: 4,
      img: WrenchPng,
      positionL: '420px',
      positionT: '600px',
      widthSize: '90px',
      component: <Wrench open={isOpened === 4} onClose={handleCloseComponen} />,
    },
    {
      id: 5,
      img: GlobePng,
      positionL: '1080px',
      positionT: '425px',
      widthSize: '90px',
      component: <Globe open={isOpened === 5} onClose={handleCloseComponen} />,
    },
    {
      id: 6,
      img: BriefcasePng,
      positionL: '950px',
      positionT: '145px',
      widthSize: '110px',
      component: (
        <Briefcase open={isOpened === 6} onClose={handleCloseComponen} />
      ),
    },
  ];

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Box
        style={{
          backgroundImage: `url(${HomeBGPng})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        width='1280px'
        height='770px'
        position='relative'
      >
        {objectParam.map((item) => (
          <Button
            key={item.id}
            sx={{
              position: 'absolute',
              left: item.positionL,
              top: item.positionT,
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
            onClick={() => handleOpenComponent(item.id)}
          >
            <img
              src={item.img}
              alt={item.img}
              style={{ width: item.widthSize }}
            />
          </Button>
        ))}
        {objectParam.map((item) => item.component)}
      </Box>
    </Box>
  );
}

export default Home;
