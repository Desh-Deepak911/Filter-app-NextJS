import ErrorMessage from '@/app/components/ErrorMessage';
import Spinners from '@/app/components/Spinners';
import { Callout, TextField, Button, Box } from '@radix-ui/themes';
import axios from 'axios';
import { error } from 'console';
import { register } from 'module';
import router from 'next/router';
import { errors } from 'playwright';
import { Controller } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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