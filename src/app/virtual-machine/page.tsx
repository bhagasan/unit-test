'use client';

import Topbar from '@/components/topbar';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, Search } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import TableVM from '@/views/virtual-machine/TableVM';
import { fetchVMs } from '@/store/actions/vmActions';

type LoadTypes = {
  setData: Dispatch<SetStateAction<any[]>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const VMPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const loadVMs = async ({ setData, setError, setLoading }: LoadTypes) => {
    try {
      const json = await fetchVMs();
      setData(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVMs({ setData, setError, setLoading });
  }, []);

  console.log({ data });

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
        {loading ? (
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        ) : (
          <TableVM data={data} />
        )}
      </div>
    </>
  );
};

export default VMPage;
