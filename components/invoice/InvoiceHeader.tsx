type Props = {};

const headerData = [
  {title: "Código da proforma", text: "WAP001"},
  {title: "Data de emissão", text: new Date().toLocaleDateString("pt-Br")},
];

const InvoiceHeader:React.FC<Props> = () => {

return (
  <header className="flex w-full bg-gray-100 p-8 pb-6">
    <figure className="flex-1 flex">
      <img className="w-12 h-12 object-contain" src="https://workattackangola.com/images/icon.png" alt="workattackangola"/>
    </figure>
    <div className="flex-1">
      <h1 className="font-bold text-2xl mb-6">Proforma</h1>
      {
        headerData.map(({title, text}) => (
        <span key={title} className=" flex flex-col mb-2 text-sm last:mb-0">
          <strong>{title}</strong>
          <p className="">{text}</p>
        </span>
        ))
      }
    </div>
  </header>
);

}

export default InvoiceHeader;