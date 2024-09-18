import tinaPng from '@assets/tina.png';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Grid2,
  Dialog,
} from '@mui/material';
import Linkedin from '@mui/icons-material/Linkedin';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { DialogPropType } from '@src/types/DialogType';

function Wanted({ open, onClose }: DialogPropType) {
  const info = {
    name: 'Yuting-huang',
    basic: [
      {
        id: 1,
        icon: <PersonIcon />,
        text: 'female',
      },
      { id: 2, icon: <CakeIcon />, text: '1996/07/20' },
      { id: 3, icon: <SmartphoneIcon />, text: '0976603802' },
      { id: 4, icon: <EmailIcon />, text: 'wsxq123@gmail.com' },
      { id: 5, icon: <SchoolIcon />, text: 'Shih Chien Univ.' },
    ],
    iconBtn: [
      {
        id: 1,
        icon: <Linkedin />,
        link: 'https://www.linkedin.com/in/yu-ting-huang-322aa1178/',
      },
      { id: 2, icon: <GitHubIcon />, link: 'https://github.com/wsxq123' },
      { id: 3, icon: <WebIcon />, link: 'https://wsxq123.github.io/resume/' },
      {
        id: 4,
        icon: <ContactPageIcon />,
        link: 'https://www.yourator.co/r/6035fc99-cf70-43db-9eb0-c24c35c622a2',
      },
    ],
  };

  const autobiography = {
    title: 'Autobiography',
    content: `I'm Tina, during my university years, I interned at a software startup and became a Product Manager upon graduation.\n\nWhile I handled product management and maintenance, I rediscovered my passion for coding and successfully transitioned into a front-end engineer.\n\nWith expertise in React, TypeScript, Java, and more, I've contributed to various projects, honing my skills as a PM and engineer.\n\nLooking ahead, I aim to evolve into a full-stack engineer, leveraging my diverse experiences to tackle new challenges.`,
  };
  function handleIconBtnClick(link: string) {
    window.open(link);
  }
  return (
    <Dialog onClose={onClose} open={open} maxWidth='md'>
      <Grid2
        container
        display='flex'
        alignItems='center'
        height='500px'
        p='20px 0px'
      >
        <Grid2
          size={5}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRight='2px solid rgba(0, 0, 0, 0.87)'
          p='0px 80px 0px 60px'
        >
          <Avatar
            alt='tinaPng'
            src={tinaPng}
            sx={{
              width: 160,
              height: 160,
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          />
          <Box marginTop='40px'>
            <Typography variant='h5' gutterBottom align='center'>
              {info.name}
            </Typography>
            <Box marginTop='10px'>
              {info.basic.map((item) => (
                <Grid2 container key={item.id}>
                  <Grid2 size={3}> {item.icon}</Grid2>
                  <Grid2 size={9}>
                    <Typography>{item.text}</Typography>
                  </Grid2>
                </Grid2>
              ))}
            </Box>
            <Box marginTop='10px' display='flex' justifyContent='center'>
              {info.iconBtn.map((item) => (
                <IconButton
                  key={item.id}
                  aria-label='btnIcon'
                  color='inherit'
                  onClick={() => handleIconBtnClick(item.link)}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid2>
        <Grid2
          size={7}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          padding='10px 20px'
        >
          <Typography variant='h5' gutterBottom align='center'>
            {autobiography.title}
          </Typography>
          <Typography gutterBottom align='center' whiteSpace='pre-line'>
            {autobiography.content}
          </Typography>
        </Grid2>
      </Grid2>
    </Dialog>
  );
}

export default Wanted;
