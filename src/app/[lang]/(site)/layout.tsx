import PageLayout from '@/components/layout/page-layout';
import { Toaster } from '@/components/ui/sonner';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLayout title={'pages'}>{children}</PageLayout>
      <Toaster
        position='top-right'
        richColors
        toastOptions={{
          style: {
            background: 'white',
            borderColor: 'rgb(0 0 0 / 10%)'
          }
        }}
      />
    </>
  );
}
