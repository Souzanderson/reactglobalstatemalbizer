import { useEffect, useState } from "react";

let _context: any = {};

export const useContext = (): [() => any, (value: any) => void] => {
  const setContext = (obj: any) => {
    _context = obj;
  };

  const getContext = () => {
    return _context;
  };

  return [getContext, setContext];
};

export const GlobalContextController = (props: { children: any }) => {
  const [getContext] = useContext();
  const [state, setState] = useState();
  const [changer, setChanger] = useState(false);

  const NodeOne = (props: any) => {
    return <div id={Date.now().toString()}>{props.children}</div>;
  };

  const NodeTwo = (props: any) => {
    return <div id={Date.now().toString()}>{props.children}</div>;
  };

  useEffect(() => {
    setInterval(() => {
      if (JSON.stringify(state) !== JSON.stringify(getContext())) {
        console.log("change on global!");
        setState(getContext());
        setChanger(!changer);
      }
    }, 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {changer ? (
        <NodeOne>{props.children}</NodeOne>
      ) : (
        <NodeTwo>{props.children}</NodeTwo>
      )}
    </>
  );
};
