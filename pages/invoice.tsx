import InvoiceHeader from "../components/invoice/InvoiceHeader";
import InvoiceUserInfo from "../components/invoice/InvoiceUserInfo";

type Props = {};



const InvoicePage:React.FC<Props> = () => {

return ( 
<main className="min-h-screen flex justify-center items-center bg-gray-200 p-12">
      <div className="w-[210mm] h-[297mm]  bg-white shadow">
        <InvoiceHeader />
        <InvoiceUserInfo />
      </div>
 </main>);

}
export default InvoicePage;