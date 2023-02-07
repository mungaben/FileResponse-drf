import { useState } from "react";

let Storevalues


 const Mystore = () => {
  const [videoids, setvideoids] = useState("");
  const [Reload, setReload] = useState(false);
    Storevalues = {
    ids: videoids,
    setids: setvideoids,
    reload: Reload,
    setreload: setReload,
  };
  return (
    Storevalues
  )
};
export default Mystore



// export Storevalues


