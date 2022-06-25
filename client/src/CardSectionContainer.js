import { useQuery, gql } from "@apollo/client";
import CardSection from "./CardSectionUI";
import TransactionList from "./TransactionListUI";

const USER_QUERY = gql`
  {
    User(id: "ich_1DYbFCKZnkqhCvg17Kipb8WI") {
      id
      card
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
      <TransactionList />
    </div>
  );
}
