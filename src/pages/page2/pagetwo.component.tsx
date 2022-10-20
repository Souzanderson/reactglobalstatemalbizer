import { IUser } from "../../models/user.interface";
import { StateChager } from "../../services/store/context/globalcontext.service";
import "./pagetwo.style.css";

export const PageTwoComponent = () => {
  const changer = new StateChager();

  const handleChangeUser = (props: IUser) => {
    changer.state = props;
  };

  return (
    <div id="pagetwosection">
      <h1>This is Page 2</h1>
      <h2>User Logged: {changer.state?.name}</h2>
      <h2>Age of User: {changer.state?.age}</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="button" onClick={()=> handleChangeUser({name:"Outro User", age: 45})}>Change to User Outro User</div>
      <br />
    </div>
  );
};
