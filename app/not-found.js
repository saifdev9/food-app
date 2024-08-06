"use client";

import { useRouter } from "next/navigation";

function Notfound() {
  const router = useRouter();

  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>

      <button onClick={() => router.back()}>Back</button>
    </main>
  );
}

export default Notfound;
