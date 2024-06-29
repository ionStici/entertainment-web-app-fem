import { useRouter } from "./Router";
import { Fragment } from "react";

function App() {
  const { page, router } = useRouter();

  return router.map(({ path, Component }) => {
    if (path === page) return <Fragment key={path}>{Component}</Fragment>;
  });
}

export default App;
