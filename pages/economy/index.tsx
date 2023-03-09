import Link from "next/link";

export default function Economy() {
  return (
    <>
      <div>
        <p>Labour Market</p>
        <p>Composite Indices</p>
        <p>Wholesale and Retail Trade</p>
        <p>Industrial Production</p>
        <p>Consumer Prices</p>
        <p>Producer Prices</p>
        <p>Exchange Rate</p>
      </div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </>
  );
}
