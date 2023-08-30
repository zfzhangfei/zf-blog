import "vditor/dist/index.css";
import React from "react";
import Vditor from "vditor";

const VditorEditor = ({currentArtical}) => {
  const [vd, setVd] = React.useState('1');

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      height:"calc(100vh - 200px)",
      after: () => {
        vditor.setValue(currentArtical.Content);
        setVd(vditor);
      },
    });
  }, []);

  return <div id="vditor" className="vditor" height="1000px"/>;
};

export default VditorEditor;
