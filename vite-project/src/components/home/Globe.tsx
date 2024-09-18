import { Dialog, Stack, Divider, Typography, Box } from '@mui/material';
import { DialogPropType } from '@src/types/DialogType';

function Globe({ open, onClose }: DialogPropType) {
  const info = [
    {
      id: 0,
      language: 'Mandarin',
      level: 'Native',
    },
    {
      id: 1,
      language: 'English',
      level: 'Basic',
      detail: [
        'Able to read technical documents',
        'Able to text communication in English',
        'Average listening and speaking ability',
      ],
    },
    {
      id: 2,
      language: 'Japanese',
      level: 'Basic',
      detail: [
        'Able to speak some daily expressions',
        'Able to understand some daily expressions',
      ],
    },
  ];

  return (
    <Dialog onClose={onClose} open={open} maxWidth='lg'>
      <Stack p='40px 20px'>
        <Typography variant='h5' align='center' mb='50px'>
          Language
        </Typography>
        <Stack
          direction='row'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={4}
          height='200px'
        >
          {info.map((item) => (
            <Box width='350px'>
              <Typography
                variant='h5'
                gutterBottom
                align='center'
                fontWeight='bold'
              >
                {item.language}
              </Typography>
              <Typography gutterBottom align='center'>
                {item.level}
              </Typography>
              <ul>
                {item.detail?.map((detailInfo) => (
                  <li>
                    <Typography gutterBottom fontSize='15px' noWrap>
                      {detailInfo}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default Globe;
