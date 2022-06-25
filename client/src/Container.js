import { useQuery, gql } from '@apollo/client';
import CardSection from './CardSection';
import TransactionContainer from './TransactionContainer';

const USER_QUERY = gql`
  {
    User(id: "ich_1DYbFCKZnkqhCvg17Kipb8WI") {
      id
    }
    Card(id: "ic_1LEJTIKZnkqhCvg1ByRzAo6n") {
      id
    }
  }
`;

export default function Container() {
  const { data, loading, error } = useQuery(USER_QUERY);

  if (loading) return "Loading...";
  if (error) return <p>{error.message}</p>;

  return (
    <div className="container">
      <CardSection data={data} />
      <TransactionContainer cardId={data.Card.id} />
    </div>
  );
}
