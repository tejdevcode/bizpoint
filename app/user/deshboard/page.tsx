import CardWrapper from '@/app/ui/dashboard/cards'
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import LatestBookings from '@/app/ui/dashboard/latest-booksings';

const Page = () => {
   return (
      <main>
         <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
         </h1>
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
               <CardWrapper />
            </Suspense>
         </div>
         <div className="w-full">
            {/* <LatestBookings /> */}
         </div>
      </main>
   )
}

export default Page