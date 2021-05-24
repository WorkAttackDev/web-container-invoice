type Props = {};

const InvoicePaymentInfo: React.FC<Props> = () => {

return (
  <section className="p-8   w-1/2"> 
      <h3 className="font-bold">Informações Bancárias</h3>
      <span className="flex justify-between pt-2 text-sm">
        <h5 className="font-medium">Número de Conta</h5>
        <p>12345678</p>
      </span>
      <span className="flex justify-between pt-2 text-sm">
        <h5 className="font-medium">IBAN</h5>
        <p>00AO 1234 5678 0000 1234 1</p>
      </span>
      <span className="flex justify-between pt-2 text-sm">
        <h5 className="font-medium">Nome da Conta</h5>
        <p>Denilson Pedro António da Costa</p>
      </span>
  </section>
);

}

export default InvoicePaymentInfo;