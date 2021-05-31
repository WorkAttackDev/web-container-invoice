import invoiceClientsData from "../../core/data/invoice_clients_data";

type Props = {};

const usersInfo:InvoiceClient[] = [
  {adress: "Nova vida rua 70 predio 165 apartamento 6. Luanda - Angola", contact: "+244 997 267 270", name: "WORKATTACK", nif: "5000675830", order: "De"},
  invoiceClientsData.bmworkz
];

const InvoiceUserInfo: React.FC<Props> = () => {

return (
  <section className="px-8 py-6 flex"> 
    {
      usersInfo.map(_ui => (
        <div key={_ui.order} className="flex-1 text-sm">
          <span className="mb-2 flex flex-col">
              <strong>{_ui.order}:</strong>
              <p className="w-4/5 ">{_ui.name}</p>
          </span>

          <span className="mb-2 flex flex-col">
              <strong>NIF:</strong>
              <p className="w-4/5">{_ui.nif}</p>
          </span>

          <span className="mb-2 flex flex-col">
              <strong>Localização:</strong>
              <p className="w-4/5">{_ui.adress}</p>
          </span>

          <span className="flex flex-col">
              <strong>Contactos</strong>
              <p className="w-4/5">{_ui.contact}</p>
          </span>
        </div>
      ))
    }
  </section>
);

}

export default InvoiceUserInfo;