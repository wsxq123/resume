import { Link, Navigate, useParams } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Catalog from '@src/components/projects/Catalog';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import { projectOption, projectDetail } from '@utils/projectsData';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Project() {
  const { projectId } = useParams();

  const routeParams =
    projectId && Number.parseInt(projectId) <= projectOption.length
      ? Number.parseInt(projectId)
      : 'catalog';

  const iconLink = [
    {
      id: 'toHome',
      to: '/resume/',
      icon: <HomeIcon fontSize='large' />,
    },
    {
      id: 'toCatalog',
      to: '/resume/projects/catalog',
      icon: <AppsIcon fontSize='large' />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: 'rgb(18 18 18)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Box height='50px' display='flex' alignItems='center'>
            {iconLink.map((item, index) => (
              <>
                <Link
                  to={item.to}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {item.icon}
                </Link>
                {index + 1 < iconLink.length && (
                  <Divider
                    orientation='vertical'
                    variant='middle'
                    flexItem
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      mr: '10px',
                      ml: '10px',
                    }}
                  />
                )}
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {typeof routeParams === 'number' && (
        <Box width='25%' p='25px 10px' flexShrink={0}>
          <Toolbar />
          <Box sx={{ overflow: 'auto' }} position='fixed' width='25%'>
            <Typography gutterBottom>
              {projectDetail[routeParams].title}
            </Typography>
            <ul>
              {projectDetail[routeParams].detail?.tool.map((item) => (
                <li>
                  <Typography gutterBottom>{item}</Typography>
                </li>
              ))}
            </ul>
            <Typography gutterBottom>
              {projectDetail[routeParams].description}
            </Typography>
            {projectDetail[routeParams].link && (
              <Box textAlign='right' mt='30px'>
                <IconButton
                  aria-label='btnIcon'
                  color='inherit'
                  onClick={() => window.open(projectDetail[routeParams].link)}
                >
                  <OpenInNewIcon fontSize='large' />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      )}
      <Box>
        <Toolbar />
        <Box p='25px'>
          {routeParams === 'catalog' && <Catalog />}
          {typeof routeParams === 'number' ? (
            projectOption[routeParams].element
          ) : (
            <Navigate to='/resume/projects/catalog' replace />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
