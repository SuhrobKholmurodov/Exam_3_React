import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Swithcher";
import Button from "../components/Button";
import one1 from "../assets/one1.png";
import burger from "../assets/burger.png";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");
  return (
    <div className="flex flex-col h-screen w-[100%]">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <img
              variant="contained"
              {...bindTrigger(popupState)}
              src={burger}
              className="h-[35px] hidden sm:block absolute bg-grey rounded-[5px] mt-[25px] ml-[325px] w-[45px]"
              alt=""
            />
            <Menu className="" {...bindMenu(popupState)}>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Doctors"}>{t("navbar.doctors")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Services"}>{t("navbar.services")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Diagnos"}>{t("navbar.diagnos")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Tests"}>{t("navbar.tests")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Stock"}>{t("navbar.stock")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Patients"}>{t("navbar.patients")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Clinic"}>{t("navbar.clinic")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Reviews"}>{t("navbar.reviews")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <li className="text-[18px] font-[400]">
                  <NavLink to={"/Contacts"}>{t("navbar.contacts")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem>
                <Button
                  text={t("start.btnText")}
                  h={"40px"}
                  bg={"rgba(59, 185, 109, 1)"}
                  w={"220px"}
                  borRadius={"30px"}
                  col={"white"}
                />
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <header className="text-[white] bg-[#0c5892] dark:bg-[#2c3153]">
        <div className="flex pt-[20px] justify-between items-center w-[90%] m-auto ">
          <p className="text-[white] dark:text-[white] text-[18px] font-[500] sm:hidden">
            {t("start.one")}
          </p>
          <p className="text-[white] blur-[1.5px] text-[18px] dark:text-[white] sm:hidden font-[500]">
            {t("start.two")}
          </p>
          <p className="text-[white] text-[22px] font-[500] dark:text-[white] sm:hidden">
            + 7 (978) 00-00-000
          </p>
          <div className="sm:hidden">
            <Button
              text={t("start.btnText")}
              h={"40px"}
              bg={"rgba(59, 185, 109, 1)"}
              w={"220px"}
              borRadius={"30px"}
              col={"white"}
            />
          </div>
        </div>
        <div className="flex pt-[10px] sm:flex-col  dark:text-[white] items-center justify-between w-[90%] m-auto pb-[20px]">
          <Link className="sm:mt-[-10px] sm:ml-[-200px]" to={"/"}>
            <img src={one1} alt="" />
          </Link>
          <ul className="flex sm:hidden justify-between w-[790px] ">
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Doctors"}>{t("navbar.doctors")}</NavLink>
            </li>
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Services"}>{t("navbar.services")}</NavLink>
            </li>
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Diagnos"}>{t("navbar.diagnos")}</NavLink>
            </li>
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Tests"}>{t("navbar.tests")}</NavLink>
            </li>
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Stock"}>{t("navbar.stock")}</NavLink>
            </li>
            <NavLink to={"/Patients"}>
              <li className="text-[18px] font-[400]">{t("navbar.patients")}</li>
            </NavLink>
            <NavLink to={"/Clinic"}>
              <li className="text-[18px] font-[400]">{t("navbar.clinic")}</li>
            </NavLink>
            <NavLink to={"/Reviews"}>
              <li className="text-[18px] font-[400]">{t("navbar.reviews")}</li>
            </NavLink>
            <NavLink to={"/Contacts"}>
              <li className="text-[18px] font-[400]">{t("navbar.contacts")}</li>
            </NavLink>
          </ul>
          <div className="flex dark:text-[black] items-center gap-[20px]">
            <Switcher />
            <select
              value={lng}
              className="border sm:mt-[-40px] text-[black] rounded-[5px] w-[50px] h-[35px]"
              id=""
              onChange={(e) => {
                changeLanguage(e.target.value);
                setlng(e.target.value);
              }}
            >
              <option value={"en"}>En</option>
              <option value={"ru"}>Ru</option>
            </select>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      <Outlet />
      <footer className="dark:bg-[#2c3153] pb-[20px] dark:text-[white]">
        <div className="w-[90%] pt-[30px] sm:flex-col m-auto flex justify-between">
          <div className="flex sm:grid flex-col gap-[20px]">
            <img className="sm:w-[200px]" src={one1} alt="" />
            <div className="grid grid-cols-1 sm:flex gap-[18px]">
              <div>
                <p>{t("last.p2")}</p>
                <p>{t("footer1.p1")}</p>
              </div>
              <div>
                <p>{t("last.p4")}</p>
                <p>+7 (9__) ___-__-__</p>
              </div>
              <div>
                <p>{t("last.p5")}</p>
                <p>{t("footer1.p2")}</p>
              </div>
            </div>
          </div>
          <div className="right pt-[30px] sm:grid sm:grid-cols-2 gap-[20px] flex justify-between">
            <div>
              <div className="flex gap-[10px] flex-col justify-between">
                <p className="text-[22px] font-[700]">
                  {t("footer1.p3")}
                </p>
                <ul className="flex flex-col">
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                </ul>
              </div>
            </div>
            <div className="two">
              <div className="flex gap-[10px] flex-col justify-between">
                <p className="text-[22px] font-[700]">{t("footer1.p3")}</p>
                <ul className="flex flex-col">
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                </ul>
              </div>
            </div>
            <div className="two">
              <div className="flex gap-[10px] flex-col justify-between">
                <p className="text-[22px] font-[700]">{t("footer1.p3")}</p>
                <ul className="flex flex-col">
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                </ul>
              </div>
            </div>
            <div className="two">
              <div className="flex gap-[10px] flex-col justify-between">
                <p className="text-[22px] font-[700]">{t("footer1.p3")}</p>
                <ul className="flex flex-col">
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                  <li className="sm:text-[15px]">{t("footer1.p7")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
