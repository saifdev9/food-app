"use client";

function error({ error, reset }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again.</button>
    </main>
  );
}

export default error;
