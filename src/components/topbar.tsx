import React, { ReactNode } from 'react';
import { SidebarTrigger } from './ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';
import { BreadcrumbTypes } from '@/lib/types';

type Props = {
  title: BreadcrumbTypes[] | string;
};

const Topbar = ({ title }: Props) => {
  const renderBradcrumb = () => {
    const temp: ReactNode[] = [];
    if (typeof title === 'string') {
      temp.push(
        <BreadcrumbItem key={title} className='hidden md:block'>
          {title}
        </BreadcrumbItem>,
      );
    } else {
      title.forEach((d: BreadcrumbTypes, idx: number) => {
        if (d.url === '#') {
          temp.push(
            <>
              <BreadcrumbItem key={d.label} className='hidden md:block'>
                {d.label}
              </BreadcrumbItem>
              {idx < title.length - 1 && <BreadcrumbSeparator className='hidden md:block' />}
            </>,
          );
        } else {
          temp.push(
            <>
              <BreadcrumbLink key={d.label} href={d.url}>
                <BreadcrumbItem className='hidden md:block'>{d.label}</BreadcrumbItem>
              </BreadcrumbLink>
              {idx < title.length - 1 && <BreadcrumbSeparator className='hidden md:block' />}
            </>,
          );
        }
      });
    }

    return temp;
  };
  return (
    <header className='flex h-16 shrink-0 items-center gap-2'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb>
          <BreadcrumbList>{renderBradcrumb()}</BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default Topbar;
