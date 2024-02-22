import style from "./ProfileModule.module.css";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { GiPencil } from "react-icons/gi";
import { AppContext } from "../../App";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
const ProfileModule = () => {
  const data = {
    name: "islam",
    email: "islam2004@gmail.com",
  };
  interface ChangeState {
    name: string;
    email: string;
  }
  const { auth } = useContext(AppContext);
  const [change, setChange] = useState<ChangeState>({
    name: "",
    email: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [avatar, setAvatar] = useState(
    "../../../public/mainComponentImage/girls.png"
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      change.name && change.email && change.email.includes("@")
    
      ? sendFormData()
      : console.log("  введите  email!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className={style.conteiner}>
      <div className={style.blok}>
        <h3>My Profile</h3>
        <div className={style.bordered}>
          <div className={style.imgBlok}>
           
           <Avatar className={style.avatar} sx={{ width: 140, height: 140 ,  opacity: isHovered ? 0.2 : 1 }} src={avatar} />
         
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <TbCameraPlus className={style.pensel} onClick={openFilePicker}  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
          </div>

          <div className={style.cont}>
            <div className={style.bloktext}>
              <p>Username:</p>
              <input
                onChange={(event) =>
                  setChange({ ...change, name: event.target.value })
                }
                className={style.datatext}
                type="text"
                placeholder={change.name}
              />
              <div>
                <GiPencil onSubmit={(e) => onSubmit} className={style.pen} />
              </div>
            </div>
            <div className={style.bloktext}>
              <p>Email:</p>
              <input
                onChange={(event) =>
                  setChange({ ...change, email: event.target.value })
                }
                className={style.datatext}
                type="text"
                placeholder={change.email}
              />
              <div>
                <GiPencil onClick={(e) => onSubmit} className={style.pen} />
              </div>
            </div>
          </div>
        </div>

        <div className={style.ButtonBlok}>
          <button>Change password</button>
          <div></div>
          <button onClick={auth.logout}>Log out</button>
        </div>

        <div className={style.ButtonBlokDelete}>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModule;