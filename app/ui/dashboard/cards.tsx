
import { FaRegMoneyBillAlt, FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuHandCoins, LuIndianRupee } from "react-icons/lu";


import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';

const iconMap: any = {
   collected: FaRegMoneyBillAlt,
   expRevenue: FiUsers,
   Revenue: FaRegClock,
   // invoices: InboxIcon,
   avorder: LuHandCoins,
};

export default async function CardWrapper() {
   //   const { totalPaidInvoices, numberOfCustomers, numberOfInvoices, totalPendingInvoices } = await fetchCardData();
   /* console.log(totalPaidInvoices); */
   return (
      <>
         {/* NOTE: Uncomment this code in Chapter 9 */}

         <Card title="Lifetime Sales" value={`1,006.26`} type="collected" />
         <Card title="Average Order" value={'2,12.32'} type="avorder" />
         <Card title="Todays Revenue" value={'2,712.32'} type="Revenue" />
         {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
         <Card title="Todays Expected Revenue" value={'2,66'} type="expRevenue" />
      </>
   );
}

export function Card({ title, value, type }: { title: string; value: number | string; type: 'invoices' | 'expRevenue' | 'Revenue' | 'collected' | 'avorder'; }) {
   const Icon = iconMap[type];

   return (
      <div className="rounded-xl bg-gray-200 p-2 shadow-sm">
         <div className="flex p-4">
            {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
            <h3 className="ml-2 text-sm font-medium">{title}</h3>
         </div>
         <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl flex`} >
            <LuIndianRupee className="mt-1 ml-1" /> {value}
         </p>
      </div>
   );
}