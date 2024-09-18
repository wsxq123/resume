import { Box, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { catalogOption } from '@utils/projectsData';

function Catalog() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      mt='30px'
    >
      <Typography variant='h5' align='center' mb='30px'>
        Project List
      </Typography>
      <Grid2 container spacing={4}>
        {catalogOption.map((item) => (
          <Grid2
            key={item.id}
            size={4}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Link to={`${item.id}`}>
              <Box sx={{ width: '400px' }}>
                <img
                  src={item.imgUrl}
                  alt={item.imgUrl}
                  style={{ objectFit: 'contain', width: '100%' }}
                />
              </Box>
            </Link>
            <Typography>{item.title}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Catalog;
