import { IUser } from "../../models/user.interface";
import { StateChager } from "../../services/store/context/globalcontext.service";
import "./pagetwo.style.css";

export const PageTwoComponent = () => {
  const user = StateChager.init<IUser>("user");
  const value = StateChager.init<number>("value");

  function handleChangeUser(props: IUser) {
    user.setState(props);
  }

  return (
    <div id="pagetwosection">
      <h1>This is Page 2</h1>
      <h2>User Logged: {user.state?.name}</h2>
      <h2>Age of User: {user.state?.age}</h2>
      <h2>Value on 2: {value.state}</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="button" onClick={()=> handleChangeUser({name:"Outro User", age: 45})}>Change to User Outro User</div>
      <br />
      <br />
      <div className="button" onClick={()=> value.setState(Date.now())}>Random value</div>
      <br />
    </div>
  );
};
