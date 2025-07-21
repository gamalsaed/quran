"use client";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "red" }}>An Error Occured {error}</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
