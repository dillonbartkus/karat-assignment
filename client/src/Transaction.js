export default function Transaction({ trxData }) {
  const { amount, created, currency, description, status } = trxData;

  const formatAmount = () => {
    const isAmountNegative = amount < 0;

    return <p className={`amount ${isAmountNegative ? 'red' : 'green'}`}>{`${isAmountNegative ? '-' : ''}${currency === 'usd' ? '$' : '€'}${Math.abs(amount)}`} </p>
  }

  const formatTimestamp = () => {
    let timestamp = new Date(created / 100);
    timestamp.setUTCSeconds(created);
    timestamp = `${timestamp}`;
    timestamp = `${timestamp.substring(4, 10)}`;

    return timestamp;
  }

  return (
    <div className={`transaction ${status}`}>
      {status === 'declined' && <p className='declined-msg'>Declined</p>}
      <p className='trx-date'>{formatTimestamp()}</p>
      <p className='trx-description'>{description}</p>
      {formatAmount()}
    </div>
  );
}
