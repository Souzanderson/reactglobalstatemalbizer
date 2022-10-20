import { IUser } from "../../models/user.interface";
import { StateChager } from "../../services/store/context/globalcontext.service";
import "./pageone.style.css";

export const PageOneComponent = () => {
  const user = StateChager.init<IUser>("user");
  const value = StateChager.init<number>("value");

  const handleChangeUser = (props: IUser) => {
    user.setState(props);
  };

  return (
    <div id="pageonesection">
      <h1>This is Page 1</h1>
      <h2>User Logged: {user.state?.name}</h2>
      <h2>Age of User: {user.state?.age}</h2>
      <h2>Value: {value.state}</h2>
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
