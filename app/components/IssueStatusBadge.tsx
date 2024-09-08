import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

interface Props {
    status: Status
}

const statusMap : Record<Status, { label: string, color: 'red' | 'green' | 'yellow'}> = {
    OPEN: {label : 'Open', color: 'green'},
    IN_PROGRESS : {label : 'InProgress', color: 'yellow'},
    CLOSED : {label : 'Closed', color: 'red'}
}

const IssueStatusBadge = ({ status } : Props) => {
  return (
    <Badge color={statusMap[status].color}>
        {statusMap[status].label}
    </Badge>
  )
}

export default IssueStatusBadge