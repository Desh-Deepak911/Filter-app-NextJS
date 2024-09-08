import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Heading, Flex, Card, Box } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IssueDetailsLoadingPage = () => {
  return (
    <Box className="max-w-xl">
        <Heading>
          <Skeleton />
        </Heading>
        <Flex gapX="3" my="2">
            <Skeleton width="3rem" />
            <Skeleton width="8rem" />
        </Flex>
        <Card className='prose' mt="5">
          <Skeleton count={3} />
        </Card>
    </Box>
  )
}

export default IssueDetailsLoadingPage