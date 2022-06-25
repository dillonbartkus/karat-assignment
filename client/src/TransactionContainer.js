import { useQuery, gql } from '@apollo/client';
import Transaction from './Transaction';

export default function TransactionList({ cardId }) {
  const TRANSACTION_QUERY = gql`
  {
    allTransactions(filter: { card: "${cardId}" }) {
      id
      amount
      created
      currency
      description
      status
    }
  }
`;

  const { data, loading, error } = useQuery(TRANSACTION_QUERY);

  if (loading) return "Loading...";
  if (error) return <p>{error.message}</p>;

  return data.allTransactions.map(trx => <Transaction trxData={trx} key={trx.id} />)
}
