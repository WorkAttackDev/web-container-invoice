import invoiceItemsData from "../../core/data/invoice_items_data";


type Props = {};

const InvoiceItems: React.FC<Props> = () => {

const formatPrice = (value: number) => new Intl.NumberFormat('de-DE').format(value) + " Kz";

return (
  <section className="">
    <ul className="flex py-4 px-8 bg-gray-100">
      <li className="w-1/2 uppercase font-bold text-xs">item</li>
      <li className="w-1/6 uppercase font-bold text-xs">custo</li>
      <li className="w-1/6 uppercase font-bold text-xs text-center">quantidade</li>
      <li className="w-1/6 uppercase font-bold text-xs text-right">preço</li>
    </ul>
    <ul className="p-8 pb-4">
      {invoiceItemsData.map(_ivid => (
        <li className="flex pb-2 text-sm last:pb-0" key={_ivid.description}>
          <h3 className="w-1/2 font-medium">{_ivid.description}</h3>
          <p className="w-1/6">{formatPrice(_ivid.price)}</p>
          <p className="w-1/6 text-center">{_ivid.quantity}</p>
          <p className="w-1/6 text-right">{formatPrice(_ivid.totalPrice)}</p>
        </li>
      ))}
    </ul>
    <div className="flex flex-col ml-auto pr-8 text-sm  w-1/2">
      <span className="flex justify-between pt-4 border-t-2">
        <h5>Subtotal</h5>
        <p>400.000 Kz</p>
      </span>
      <span className="flex justify-between pt-2">
        <h5>Disconto</h5>
        <p>0 Kz</p>
      </span>
      <span className="flex justify-between pt-2">
        <h5>IVA</h5>
        <p>0 Kz</p>
      </span>
      <strong className="flex justify-between pt-2">
        <h5>Total a Pagar</h5>
        <p>400.000 Kz</p>
      </strong>
      <span className="flex justify-between pt-2">
        <h5>Total Pago</h5>
        <p>0 Kz</p>
      </span>
    </div>
  </section>
);

}

export default InvoiceItems;