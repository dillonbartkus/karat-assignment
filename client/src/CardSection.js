export default function CardSection({ loading, data }) {

  if (loading) return (
    <div className='card-skelly'>
      
    </div>
  );

  const { User, Card, allTransactions } = data;

  const userFirstName = User.name.split(' ')[0];

  const calculateTrxSum = () => {
    let sum = 0;
    allTransactions.forEach(trx => {
      sum += trx.amount;
    });
    return sum;
  }

  const calculateTrxAverage = () => Math.floor( 100 * (calculateTrxSum() / allTransactions.length)) / 100;

  const formatSum = () => calculateTrxSum() < 0 ? `-$${Math.abs(calculateTrxSum())}` : `$${calculateTrxSum()}`

  const formatAverage = () => calculateTrxAverage() < 0 ? `-$${Math.abs(calculateTrxAverage())}` : `$${calculateTrxAverage()}`

  return (
    <div className='card-section'>
      <div className='card-metrics'>
        <h3>{`Hello ${userFirstName}!`}</h3>
        <p>Your balance is <span className={calculateTrxSum() < 0 ? 'amount red' : 'amount green'}>{formatSum()}</span></p>
        <p>Your average transaction amount is <span className={calculateTrxAverage() < 0 ? 'amount red' : 'amount green'}>{formatAverage()}</span></p>
      </div>
      <div className='card'>
        <p>{User.name}</p>
        <p>xxxx-xxxx-xxxx-{Card.last4}</p>
        <span>{Card.brand} Exp: {Card.exp_month}</span><span>/{Card.exp_year}</span>
      </div>
    </div>
  )
}
