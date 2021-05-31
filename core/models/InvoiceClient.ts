interface InvoiceClient {
  adress: string;
  contact: string;
  name: string;
  nif: string;
  order: 'Para' | 'De';
}

export default InvoiceClient;
