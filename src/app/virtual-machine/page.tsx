import Topbar from '@/components/topbar';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, Search } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import TableVM from '@/views/virtual-machine/TableVM';

const VMPage = () => {
  return (
    <>
      <Topbar title='Virtual Machine' />
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='flex justify-between items-center'>
          <div>
            <InputGroup>
              <InputGroupInput placeholder='Search...' />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className='flex gap-x-2'>
            <Button variant='outline' size='icon'>
              <RefreshCw />
            </Button>
            <Button>
              <Plus /> Create
            </Button>
          </div>
        </div>
        <TableVM />
        <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
      </div>
    </>
  );
};

export default VMPage;
