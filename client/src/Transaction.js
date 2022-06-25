export default function Transaction({ trxData }) {
  const { amount, created, currency, description, status } = trxData;

  const timestamp = new Date(created / 100);
  timestamp.setUTCSeconds(created);
  console.log(timestamp);

  return (
    <div className="transaction">
      <p>sad</p>
    </div>
  );
}
