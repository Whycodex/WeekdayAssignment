import { Card, CardContent, Skeleton } from '@mui/material';

const CardShimmer = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%)',
          animation: 'shimmer 1s infinite linear',
        },
        '@keyframes shimmer': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      }}
    >
      <CardContent sx={{width: "330px",height: "500px"}}>
        <Skeleton variant="rectangular" width={330} height={450} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </CardContent>
    </Card>
  );
};

export default CardShimmer;