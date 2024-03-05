import "../Patients/pat.css";
import map from "../Home/map.png";

import React, { useState } from "react";
import Button from "../../components/Button";
const Patients = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const expandText = () => {
    setIsExpanded(!isExpanded);
  };
  const expandText2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto">
          <p className="text-[grey]">Главная ></p>
          <p>Нормативно правовая информация</p>
        </div>
        <p className="w-[90%] m-auto text-[30px] pt-[40px] font-[700]">
          Нормативно правовая информация
        </p>
      </div>

      <section className="dark:bg-[#2c3153]">
        <section>
          <div className="pt-[30px] pb-[10px]">
            <div className="mainBlock" onClick={expandText2}>
              <div
                style={{
                  borderTop: "1px solid grey ",
                  borderLeft: "1px solid grey ",
                  borderRight: "1px solid grey ",
                  borderBottom: "0.1px solid grey ",
                  padding: "10px",
                }}
                className="flex w-[90%] dark:bg-[#2a327b] dark:text-[white] m-auto justify-between"
              >
                <p className="text-[18px]">
                  Очень очень длинное название информации
                </p>
                <p
                  className="bg-grr text-[white]"
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid green",
                    borderRadius: "10px",
                    paddingBottom: "3px",
                  }}
                >
                  {isExpanded2 ? "-" : "+"}
                </p>
              </div>
            </div>
            {isExpanded2 && (
              <div
                style={{
                  borderBottom: "1px solid grey ",
                  borderLeft: "1px solid grey ",
                  borderRight: "1px solid grey ",
                  padding: "10px",
                }}
                className="additional-text dark:text-[white] w-[90%] m-auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                convallis proin pharetra lobortis sed posuere eu libero. Auctor
                placerat viverra diam fermentum non porttitor eu. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed id convallis
                proin pharetra lobortis sed posuere eu libero. Auctor placerat
                viverra diam fermentum non porttitor eu.
              </div>
            )}
          </div>
        </section>
        <div className="pt-[30px] pb-[30px]">
          <div className="mainBlock" onClick={expandText}>
            <div
              style={{
                borderTop: "1px solid grey ",
                borderLeft: "1px solid grey ",
                borderRight: "1px solid grey ",
                borderBottom: "0.1px solid grey ",
                padding: "10px",
              }}
              className="flex w-[90%]  dark:bg-[#2a327b] dark:text-[white] m-auto justify-between"
            >
              <p className="text-[18px]">
                Очень очень длинное название информации
              </p>
              <p
                className="bg-grr text-[white]"
                style={{
                  height: "20px",
                  width: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid green",
                  borderRadius: "10px",
                  paddingBottom: "3px",
                }}
              >
                {isExpanded ? "-" : "+"}
              </p>
            </div>
          </div>
          {isExpanded && (
            <div
              style={{
                borderBottom: "1px solid grey ",
                borderLeft: "1px solid grey ",
                borderRight: "1px solid grey ",
                padding: "10px",
              }}
              className="additional-text dark:text-[white] w-[90%] m-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              convallis proin pharetra lobortis sed posuere eu libero. Auctor
              placerat viverra diam fermentum non porttitor eu. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed id convallis
              proin pharetra lobortis sed posuere eu libero. Auctor placerat
              viverra diam fermentum non porttitor eu.
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="ss flex justify-between w-[100%]">
          <div className="bg-[black] flex sm:text-center sm:gap-[10px] flex-col justify-between p-[90px] text-[white] w-[410px]">
            <p>Наши контакты</p>
            <div>
              <p>Адрес</p>
              <p>г. Томск, ул. 79 Гвардейской дивизии, 6</p>
            </div>
            <div>
              <p>Телефон</p>
              <p>8 (3822) 50-00-49</p>
            </div>
            <div>
              <p>Почта</p>
              <p>info@docnear.ru</p>
            </div>
            <Button
              text={"Записаться на прием"}
              bg={"rgba(59, 185, 109, 1)"}
              borRadius={"30px"}
              w={"200px"}
              h={"40px"}
              col={"white"}
            />
          </div>
          <div>
            <img src={map} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patients;
