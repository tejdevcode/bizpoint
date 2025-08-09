import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
   subsets: ['latin'],
   weight: ['400', '700'],
});
/* const roboto = Roboto({ subsets: ['latin'] }); */

export { inter, lusitana };