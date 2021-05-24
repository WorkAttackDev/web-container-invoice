import InvoiceHeader from "../components/invoice/InvoiceHeader";
import InvoiceUserInfo from "../components/invoice/InvoiceUserInfo";
import InvoiceItems from "../components/invoice/InvoiceItems";
import InvoicePaymentInfo from "../components/invoice/InvoicePaymentInfo";

type Props = {};



const InvoicePage:React.FC<Props> = () => {

return ( 
<main className="min-h-screen flex justify-center items-center bg-gray-200 p-12 print:p-0">
      <div className="w-[210mm] h-[297mm]  bg-white shadow print:shadow-none">
        <InvoiceHeader />
        <InvoiceUserInfo />
        <InvoiceItems />
        <InvoicePaymentInfo />
      </div>
 </main>);

}
export default InvoicePage;