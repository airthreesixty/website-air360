'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { submitForm } from './actions';
import { toast } from 'sonner';
import ToastErrorMessage from '@/components/common/toast-error-message';

interface Props {
  slug: string;
  title: string;
  contentTitle: string;
}

const userSchema = z.object({
  firstName: z.string().min(3, {
    message: 'Name must be at least 3 characters.'
  }),
  lastName: z.string().min(3, {
    message: 'Name must be at least 3 characters.'
  }),
  email: z.string().email('This is not a valid email.'),
  contentTitle: z.string()
});

export type FormSchemaType = z.infer<typeof userSchema>;

const GalleryForm: React.FC<Props> = ({ title, contentTitle }) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations('gallery.form');
  const locale = useLocale();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      contentTitle
    }
  });

  const handleSubmit = async (data: FormSchemaType) => {
    setLoading(true);
    try {
      await submitForm(data, locale);
      setLoading(false);
      toast.success(t('formSuccessMessage'));
      form.reset();
    } catch (error) {
      setLoading(false);
      toast.error(<ToastErrorMessage>Error while submiting the form</ToastErrorMessage>);
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('firstName')}</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('lastName')}</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            size={'sm'}
            loading={loading}
            type='submit'
            className={cn('!mt-6 w-full transition ease-in-out duration-300', !form.formState.isValid && 'opacity-25 cursor-not-allowed')}
            disabled={!form.formState.isValid || loading}
          >
            {!loading && <>{'Submit'}</>}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default GalleryForm;
