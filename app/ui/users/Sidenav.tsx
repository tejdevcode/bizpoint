"use client";
import { MdDeveloperBoard } from "react-icons/md";
import { LuUsers, LuListTodo } from "react-icons/lu";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { usePathname } from "next/navigation";
import BrandLogo from '@/app/ui/BrandLogo'


const Sidenav = () => {
   const pathname = usePathname();
   const link = [
      { name: 'Dashboard', icon: <MdDeveloperBoard className="w-6 h-5" />, href: '/user/deshboard' },
      { name: 'Members', icon: <LuUsers className="w-6 h-5" />, href: '#' },
      { name: 'Bookings', icon: <LuListTodo className="w-6 h-5" />, href: '#' },
      { name: 'Reporting', icon: <HiOutlineDocumentReport className="w-6 h-5" />, href: '#' }
   ]
   return (
      <nav className="rounded-lg pt-6 w-full flex-none md:w-64">
         <BrandLogo />
         <ul className="space-y-2">
            {link?.map((item, index) => (
               <li key={index}>
                  <a href={item.href} className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${item.href === pathname ? 'bg-sky-100 text-blue-600' : ''}`}>
                     {item.icon} {item.name}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default Sidenav