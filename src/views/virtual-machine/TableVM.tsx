import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StatusColorTypes, VMStatusTypes } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TableVM = ({ data }: { data: any[] }) => {
  const renderBadge = (status: VMStatusTypes) => {
    let color: StatusColorTypes = 'default';
    switch (status) {
      case 'Stopped':
        color = 'outline';
        break;
      case 'Crashed':
        color = 'destructive';
        break;
    }

    return <Badge variant={color}>{status}</Badge>;
  };
  return (
    <Card className='w-full max-w-sm'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>NAME</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>PACKAGE</TableHead>
            <TableHead>IP ADDRESS</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d: any) => (
            <TableRow key={d.name}>
              <TableCell className='font-medium'>{d.name}</TableCell>
              <TableCell>{renderBadge(d.status)}</TableCell>
              <TableCell>vps-medium-m1</TableCell>
              <TableCell>{d.ip}</TableCell>
              <TableCell className='text-right' width={64}>
                <Button size='icon' variant={'ghost'}>
                  <ChevronRight />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
      </Table>
    </Card>
  );
};

export default TableVM;
