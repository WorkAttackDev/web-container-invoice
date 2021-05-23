type Props = {};

const usersInfo = [
  {adress: "Nova vida rua 70 predio 165 apartamento 6", contact: "999 999 000", name: "WorkAttack", order: "de"},
  {adress: "cliente rua 70 predio 165 apartamento 6", contact: "999 999 000", name: "Cliente", order: "para"},
]

const InvoiceUserInfo: React.FC<Props> = () => {

return (
  <section className="p-12 flex"> 
    {
      usersInfo.map(_ui => (
        <div key={_ui.order} className="flex-1">
          <span className="mb-4">
              <strong>Conta {_ui.order}:</strong>
              <p className="w-4/5">{_ui.name}</p>
          </span>

          <span className="mb-4">
              <strong>Localização:</strong>
              <p className="w-4/5">{_ui.adress}</p>
          </span>

          <span>
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