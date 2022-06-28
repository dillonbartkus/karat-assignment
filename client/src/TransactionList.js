import { useEffect, useState } from 'react';
import Transaction from './Transaction';

export default function TransactionList({ data }) {

  const [ transactions, setTransactions ] = useState([]);

  useEffect(() => {
    setTransactions(data);
  }, []);

  const filterTrxs = (filter) => {
    setTransactions(transactions.filter(trx => trx[filter] === filter));
  };

  const sortTrxs = (field) => {
    const sortableArr = [];
  }

  return (
    <div className='trx-container'>
      <div className='trx-filters transaction'>
        <p
          className='trx-date'
          onClick={() => sortTrxs('created')}
        >Date</p>
        <p className='trx-description'>Merchant</p>
        <p className='amount'>Amount</p>
      </div>
      {transactions.map(trx => <Transaction trxData={trx} key={trx.id} />)}
    </div>
  )
}
