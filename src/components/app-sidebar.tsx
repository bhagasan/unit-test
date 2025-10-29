'use client';

import * as React from 'react';
import { Network, Cpu, Command, Server, LayoutDashboard } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'bhagas',
    email: 'bhagas@admin.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: LayoutDashboard,
    },
    {
      title: 'Virtual Machine',
      url: 'virtual-machine',
      icon: Cpu,
    },
    {
      title: 'Storage',
      url: '#',
      icon: Server,
      items: [
        {
          title: 'Block Storage',
          url: 'storage/block-storage',
        },
        {
          title: 'Object Storage',
          url: 'storage/object-storage',
        },
      ],
    },
    {
      title: 'Network',
      url: '#',
      icon: Network,
      items: [
        {
          title: 'VPC',
          url: 'network/vpc',
        },
        {
          title: 'Floating IP',
          url: 'network/floating-ip',
        },
        {
          title: 'Load Balancer',
          url: 'network/load-balancer',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='#'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <Command className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Cloud Service</span>
                  <span className='truncate text-xs'>Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
