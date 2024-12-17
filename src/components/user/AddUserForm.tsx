import { useState } from "react";
import { addUser,fetchUsers } from "./userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

export const AddUserForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e:any) => {
      e.preventDefault();

      let newUser:any = {
        id: Date.now(),
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar : avatar || 'https://loval.jpg'
      };

      dispatch(addUser(newUser))
    }

    return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>
                  FirstName:
                  <input type="text"
                    value={firstName}
                    className="inputboxstyling mt-2"
                    onChange={(e)=>setFirstName(e.target.value)}
                    required
                  />
              </label>
              <label className="mt-2">
                  LastName:
                  <input type="text"
                    value={lastName}
                    className="inputboxstyling mt-2"
                    onChange={(e)=>setlastName(e.target.value)}
                    required
                  />
              </label>
              <label className="mt-2">
                  Email:
                  <input type="text"
                    value={email}
                    className="inputboxstyling mt-2"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
              </label>
              <label className="mt-2">
                  Avatar Url:
                  <input type="text"
                    value={avatar}
                    className="inputboxstyling mt-2"
                    onChange={(e)=>setAvatar(e.target.value)}
                    required
                  />
              </label>


              <button type="submit" className="mt-3">Add User</button>
          </form>
      </div>
    )
}
