type Props = {};

const headerData = [
  {title: "Código da proforma", text: "WAP001"},
  {title: "Data de emissão", text: new Date().toString()},
];

const InvoiceHeader:React.FC<Props> = () => {

return (
  <header className="flex w-full bg-gray-100 p-12">
    <figure className="flex-1 flex">
      <img className="w-12 h-12 object-contain" src="https://workattackangola.com/images/icon.png" alt="workattackangola"/>
    </figure>
    <div className="flex-1">
      <h1 className="font-bold text-2xl mb-8">Proforma</h1>
      {
        headerData.map(({title, text}) => (
        <span className="first:mb-4">
          <strong>{title}</strong>
          <p className="text-opacity-20">{text}</p>
        </span>
        ))
      }
    </div>
  </header>
); 

}

export default InvoiceHeader;