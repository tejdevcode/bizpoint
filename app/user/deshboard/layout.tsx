import Sidenav from '@/app/ui/users/Sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="container">
         <div className="flex min-h-screen">
            <Sidenav />
            <div className="flex-1 p-8">{children}</div>
         </div>
      </div>
   )
}

export default Layout