import style from "./ProfileModule.module.css";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect } from "react";
import { GiPencil } from "react-icons/gi";
import { AppContext } from "../../App";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import DeleteAccount from "../../components/CardDelet/CardDelete";
import { Link } from "react-router-dom";
import { Getid, sendFormData } from "../../services/auth.service";
import Cookies from "js-cookie";

const ProfileModule = () => {
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
  const [open, SetOpen] = useState(false);

  const [avatar, setAvatar] = useState(
    "../../../public/mainComponentImage/girls.png"
  );

  const cook = Cookies.get("token");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataCopy = { ...change, photo: avatar };
    try {
      if (change.name && change.email.includes("@")) {
        // Отправляем данные на сервер
        const response = await sendFormData(dataCopy);

        setChange(dataCopy);
        console.log("Данные успешно отправлены на сервер");
      } else {
        console.log("Введите email!");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
    }
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
  const closeModal = () => {
    SetOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Getid();

        const email = response.data;
        console.log(response)
        // setChange(userData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.conteiner}>
      {open && <DeleteAccount onClose={closeModal} />}
      <div className={style.blok}>
        <h3>My Profile</h3>
        <div className={style.bordered}>
          <div className={style.imgBlok}>
            <Avatar
              className={style.avatar}
              sx={{ width: 140, height: 140, opacity: isHovered ? 0.2 : 1 }}
              src={avatar}
            />

            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <TbCameraPlus
              className={style.pensel}
              onClick={openFilePicker}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          <div className={style.cont}>
          <form onSubmit={onSubmit}>
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
                <GiPencil onClick={(e) => onSubmit} className={style.pen} />
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
            </form>
          </div>
        </div>

        <div className={style.ButtonBlok}>
          <Link to="change">
            <button>Change password</button>
          </Link>
          <div></div>
          <button onClick={auth.logout}>Log out</button>
        </div>

        <div className={style.ButtonBlokDelete}>
          <button onClick={() => SetOpen((open) => !open)}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModule;
