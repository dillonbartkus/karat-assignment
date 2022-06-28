import { useQuery, gql } from '@apollo/client';
import CardSection from './CardSection';
import TransactionList from './TransactionList';
import TransactionSkeleton from './TransactionSkeleton';

const USER_QUERY = gql`
  {
    User(id: "ich_1DYbFCKZnkqhCvg17Kipb8WI") {
      id
      balance
      email
      name
    }
    Card(id: "ic_1LEJTIKZnkqhCvg1ByRzAo6n") {
      id
      last4
      exp_month
      exp_year
      brand
    }
    allTransactions(filter: { card: "ic_1LEJTIKZnkqhCvg1ByRzAo6n" }) {
      id
      amount
      created
      currency
      description
      status
    }
  }
`;

export default function Container() {
  const { data, loading, error } = useQuery(USER_QUERY);

  if (loading) return (
    <div className="container">
      <CardSection loading />
      <div className='trx-container'>
        <TransactionSkeleton />
        <TransactionSkeleton />
        <TransactionSkeleton />
        <TransactionSkeleton />
      </div>
    </div>
  );

  if (error) return (
    <div className='error-container'>
      <p>Something went wrong...</p>
      <button className='refresh-btn'
        onClick={() => window.location.reload()}
      >Refresh Page</button>
    </div>
  );

  return (
    <div className="container">
      <CardSection data={data} />
      <TransactionList data={data.allTransactions} />
    </div>
  );
}
