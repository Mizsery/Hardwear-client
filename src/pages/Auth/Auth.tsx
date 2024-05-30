import { useState } from 'react';

import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';

import { GoBack } from '@/components/GoBack/GoBack';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Auth = () => {
  const [selectedTab, setSelectedTab] = useState('login');

  return (
    <main className='flex h-screen items-center justify-center pt-4'>
      <Tabs value={selectedTab} onValueChange={(key) => setSelectedTab(key)}>
        <TabsList className='grid w-full grid-cols-2 '>
          <TabsTrigger value='login'>Вход</TabsTrigger>
          <TabsTrigger value='signup'>Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value='login' className='w-[300px] md:w-[400px]'>
          <Card>
            <CardContent className='space-y-2 pt-2'>
              <GoBack />
              <Login setSelectedTab={setSelectedTab} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='signup' className='w-[400px]'>
          <Card>
            <CardContent className='space-y-2 pt-2'>
              <GoBack />
              <SignUp setSelectedTab={setSelectedTab} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};
