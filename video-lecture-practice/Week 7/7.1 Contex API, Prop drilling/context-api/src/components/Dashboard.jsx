import { useState } from "react";

export function Dashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Boldify>Dashboard page</Boldify>
    </div>
  );
}

function Boldify({ children }) {
  return <b>{children}</b>;
}
