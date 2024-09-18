import { Box, Button, Dialog, Grid2, Typography } from '@mui/material';
import { DialogPropType } from '@src/types/DialogType';
import { BarItem, BarPlot } from '@mui/x-charts/BarChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { useState } from 'react';

function Wrench({ open, onClose }: DialogPropType) {
  const skillsInfo = [
    {
      id: 0,
      title: 'Front-end Development',
      skills: [
        { subtitle: 'HTML', degree: 3 },
        { subtitle: 'CSS', degree: 2 },
        { subtitle: 'Javascript', degree: 3 },
        { subtitle: 'React', degree: 3 },
        { subtitle: 'TypeScript', degree: 3 },
        { subtitle: 'Next.js', degree: 2 },
        { subtitle: 'Angular', degree: 1 },
        { subtitle: 'Node.js', degree: 2 },
      ],
    },
    {
      id: 1,
      title: 'Back-end Development',
      skills: [
        { subtitle: 'Java', degree: 2 },
        { subtitle: 'Spring Boot', degree: 1 },
        { subtitle: 'Maven', degree: 1 },
      ],
    },
    {
      id: 2,
      title: 'Database',
      skills: [{ subtitle: 'MySQL', degree: 2 }],
    },
    {
      id: 3,
      title: 'Version Control',
      skills: [
        { subtitle: 'Git', degree: 2 },
        { subtitle: 'GitHub', degree: 2 },
      ],
    },
    {
      id: 4,
      title: 'UI Framework',
      skills: [
        { subtitle: 'Bootstrap', degree: 2 },
        { subtitle: 'Material UI', degree: 2 },
      ],
    },
    {
      id: 5,
      title: 'Linters Formatters',
      skills: [
        { subtitle: 'ESLint', degree: 2 },
        { subtitle: 'Prettier', degree: 2 },
      ],
    },
  ];

  const [chartData, setchartData] = useState<
    { subtitle: string; degree: number }[]
  >(skillsInfo[0].skills);

  function handleClick(id: number) {
    setchartData(skillsInfo[id].skills);
  }

  function handleChartLabel(item: BarItem) {
    switch (item.value ?? 0) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Expert';
    }
    return item.value?.toString();
  }

  function caculateChartWidth(arrSize: number) {
    if (arrSize >= 5) {
      return 1000;
    } else if (arrSize >= 2) {
      return 400;
    } else {
      return 250;
    }
  }

  return (
    <Dialog onClose={onClose} open={open} maxWidth='lg'>
      <Box
        height='500px'
        p='20px'
        display='flex'
        alignItems='center'
        flexDirection='column'
      >
        <Grid2 container border='2px solid' p='10px'>
          {skillsInfo.map((item) => (
            <Grid2 size={4} key={item.id} m='10px 0px' textAlign='center'>
              <Button onClick={() => handleClick(item.id)}>
                <Typography>{item.title}</Typography>
              </Button>
            </Grid2>
          ))}
        </Grid2>

        <ChartContainer
          series={[
            {
              type: 'bar',
              data: chartData.map((i) => i.degree),
            },
          ]}
          xAxis={[
            {
              data: chartData.map((i) => i.subtitle),
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}
          width={caculateChartWidth(chartData.length)}
          height={300}
        >
          <BarPlot barLabel={(item) => handleChartLabel(item)} />
          <ChartsXAxis position='bottom' axisId='x-axis-id' />
        </ChartContainer>
      </Box>
    </Dialog>
  );
}

export default Wrench;
