import { IUser } from "../../models/user.interface";
import { useContext } from "../../services/store/context/context.service";
import "./pageone.style.css";

export const PageOneComponent = () => {
  // const changer = new StateChager();
  const [getContext, setContext] = useContext();

  const handleChangeUser = (props: IUser) => {
    setContext(props);
  };

  return (
    <div id="pageonesection">
      <h1>This is Page 1</h1>
      <h2>User Logged: {getContext()?.name}</h2>
      <h2>Age of User: {getContext()?.age}</h2>
      <br />
      <br />
      <br />
      <br />
      <div
        className="button"
        onClick={() => handleChangeUser({ name: "Anderson", age: 18 })}
      >
        Change to User Anderson
      </div>
      <br />
      <div
        className="button"
        onClick={() => handleChangeUser({ name: "Maurício", age: 32 })}
      >
        Change to User Maurício
      </div>
      <br />
      <div
        className="button"
        onClick={() => handleChangeUser({ name: "Michael", age: 900 })}
      >
        Change to User Michael
      </div>
    </div>
  );
};
