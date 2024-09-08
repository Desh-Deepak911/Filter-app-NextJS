import { Skeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-w-xl'>
      <form>
          <Skeleton />
          <Skeleton height="20rem" />
      </form>
    </Box>
  )
}

export default LoadingNewIssuePage