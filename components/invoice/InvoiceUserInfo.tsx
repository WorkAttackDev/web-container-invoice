type Props = {};

const usersInfo = [
  {adress: "Nova vida rua 70 predio 165 apartamento 6", contact: "999 999 000", name: "WorkAttack",nif: "12345678", order: "de"},
  {adress: "cliente rua 70 predio 165 apartamento 6", contact: "999 999 000", name: "Cliente", nif: "12345678", order: "para"},
]

const InvoiceUserInfo: React.FC<Props> = () => {

return (
  <section className="p-8 flex"> 
    {
      usersInfo.map(_ui => (
        <div key={_ui.order} className="flex-1 text-sm">
          <span className="mb-2 flex flex-col">
              <strong>Conta {_ui.order}:</strong>
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