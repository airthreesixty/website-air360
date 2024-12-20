'use client';
import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn, formatPriceEuro } from '@/lib/utils';

const defaultValues = {
  monthlySessions: undefined,
  currentConversionRate: undefined,
  aov: undefined
};

const FormSchema = z.object({
  monthlySessions: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number({
        required_error: "Online store's monthly sessions is required",
        invalid_type_error: 'This field must be a number'
      })
      .positive()
  ),
  currentConversionRate: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number({
        required_error: 'Current conversion rate is required',
        invalid_type_error: 'This field must be a number'
      })
      .positive()
  ),
  aov: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number({
        required_error: 'Average order value(€) is required',
        invalid_type_error: 'This field must be a number'
      })
      .positive()
  )
});

export default function ROICalculator() {
  const t = useTranslations('roi-calc');

  // const [monthlySessions, setMonthlySessions] = useState('');
  // const [currentConversionRate, setCurrentConversionRate] = useState('');
  // const [aov, setAov] = useState('');
  const [additionalRevenue, setAdditionalRevenue] = useState(formatPriceEuro(0));
  const [roi, setRoi] = useState('0');
  const currency = '€'; // Assuming euro currency for the example

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  });

  const { monthlySessions, currentConversionRate, aov } = form.watch();

  // Cost calculation logic using useMemo
  const costOfAir360 = useMemo(() => {
    if (monthlySessions) {
      const yearlySessions = monthlySessions * 12;

      if (yearlySessions <= 5000000) {
        if (yearlySessions <= 1000000) {
          return 500;
        }
        return Math.ceil(yearlySessions / 1000000) * 500;
      } else if (yearlySessions <= 10000000) {
        const firstTierCost = 2500;
        const remainingSessions = yearlySessions - 5000000;
        return firstTierCost + Math.ceil(remainingSessions / 1000000) * 300;
      } else if (yearlySessions <= 50000000) {
        const firstTierCost = 2500;
        const secondTierCost = 1500;
        const remainingSessions = yearlySessions - 10000000;
        return firstTierCost + secondTierCost + Math.ceil(remainingSessions / 1000000) * 100;
      } else {
        const firstTierCost = 2500;
        const secondTierCost = 1500;
        const thirdTierCost = Math.ceil(40000000 / 10000) * 100;
        const remainingSessions = yearlySessions - 50000000;
        return firstTierCost + secondTierCost + thirdTierCost + Math.ceil(remainingSessions / 10000) * 60;
      }
    }
    return 0;
  }, [monthlySessions]);

  // Current Orders, Revenue, and ROI Calculations
  const currentOrders = useMemo(() => {
    return monthlySessions ? monthlySessions * (currentConversionRate / 100) : 0;
  }, [monthlySessions, currentConversionRate]);

  const currentRevenue = useMemo(() => {
    return currentOrders * 3 * aov;
  }, [currentOrders, aov]);

  const newConversionRate = useMemo(() => {
    return currentConversionRate ? currentConversionRate * 1.5 : 0;
  }, [currentConversionRate]);

  const newRevenue = useMemo(() => {
    return monthlySessions ? monthlySessions * 3 * (newConversionRate / 100) * aov : 0;
  }, [monthlySessions, newConversionRate, aov]);

  const onCalculate = (data: z.infer<typeof FormSchema>) => {
    console.log('onCalculate', data);
    const additionalRevenue = parseFloat((newRevenue - currentRevenue).toFixed(0));
    const roi = (additionalRevenue / ((costOfAir360 / 0.8) * 3)).toFixed(1);

    setAdditionalRevenue(formatPriceEuro(Number(additionalRevenue.toFixed(0))));
    setRoi(roi === '0.0' ? '0' : roi);
    console.log(`Additional Revenue: ${additionalRevenue.toFixed(0)}, ROI: ${roi}`);
  };

  return (
    <div className='border border-gray-200 rounded-lg shadow-md px-5 py-8 mt-12'>
      <h2 className='text-black-600 font-bold text-2xl mb-8'>{t('subtitle')}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onCalculate)} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='monthlySessions'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input floating type='number' placeholder={t('label1')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='currentConversionRate'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input floating type='number' placeholder={t('label2')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='aov'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input floating type='number' placeholder={`${t('label3')}(${currency})`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex justify-center pt-4 pb-8'>
            <Button type='submit' disabled={!form.formState.isValid} className={cn('w-full transition ease-in-out duration-300 ', !form.formState.isValid && 'opacity-25 cursor-not-allowed')}>
              {t('calculate')}
            </Button>
          </div>
        </form>
      </Form>
      <hr />
      <div className='flex justify-between items-center mt-8 mb-5'>
        <p className='text-black-600'>{t('additional-revenue')}</p>
        <span className='text-black-600 font-bold'>{additionalRevenue}</span>
      </div>
      <div className='flex justify-between items-center mb-8'>
        <p className='text-black-600'>{t('roi')}</p>
        <span className='text-black-600 font-bold'>
          {roi} {t('times')}
        </span>
      </div>
      <p className='text-xs text-black-600'>{t('caution')}</p>
    </div>
  );
}
