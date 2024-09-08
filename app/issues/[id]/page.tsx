import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown';

interface Props {
    params: { id: string } 
}


const IssueDetailsPage = async ({ params }: Props) => {

    const issue = await prisma.issue.findUnique({ 
        where: { id: params.id }
    })

    if(!issue)
        notFound();

    return (
        <div>
            <Heading>
                {issue?.title}
            </Heading>
            <Flex gapX="3" my="2">
                <IssueStatusBadge status={issue?.status}></IssueStatusBadge>
                {issue?.createdAt.toDateString()}
            </Flex>
            <Card className='prose' mt="5">
                <ReactMarkdown>{issue?.description}</ReactMarkdown>
            </Card>
        </div>
    )
}

export default IssueDetailsPage