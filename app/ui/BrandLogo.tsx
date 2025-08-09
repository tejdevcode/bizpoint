import { lusitana } from "@/app/ui/fonts";
import { FiGlobe } from "react-icons/fi";



const BrandLogo = () => (
   <div className="flex items-center gap-2 mb-2 h-16 justify-start rounded-md bg-blue-600 p-4 md:h-24 text-white">
      {/* <svg
         xmlns="http://www.w3.org/2000/svg"
         width="32"
         height="32"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="text-blue-600"
      >
         <path d="M12 2l9 7-9 7-9-7z" />
         <path d="M12 22V9" />
      </svg> */}
      <FiGlobe className="h-12 w-12 rotate-[15deg]" />
      <span className={`text-3xl font-bold  ${lusitana.className}`}>
         BizPoint
      </span>
   </div>
);

export default BrandLogo;
