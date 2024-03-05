import React from "react";
import Card3 from "../../components/Card3";
import white from "../Tests/white.png";
import search from "../Diagnos/search.png";
import pochta from "../Diagnos/pochta.png";
import phone from "../Diagnos/phone.png";
import a1 from "../Tests/a1.png";
import a2 from "../Tests/a2.png";
import a3 from "../Tests/a3.png";
import a4 from "../Tests/a4.png";
import girl from "../Tests/girl.png";
import ones from "../Tests/ones.png";
import diplom from "../Home/diplom.png";
import Button from "../../components/Button";
import docs from "../Doctors/docs.png";

const Tests = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] pt-[10px] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto pb-[20px]">
          <p className="text-[grey]">Главная ></p>
          <p>Анализы</p>
        </div>
        <p className="w-[90%] m-auto text-[30px] font-[700]">Анализы</p>
      </div>
      <section className="dark:bg-[#2c3153]">
        <div className="pt-[30px] sm:hidden pb-[50px] sm:grid-cols-1 w-[90%] m-auto gap-[20px] grid grid-cols-2">
          <Card3
            bg={"rgba(59, 185, 109, 1"}
            p={"20px"}
            w={"530px"}
            h={"400px"}
            p1={"Скидка -20% на МРТ"}
            p4={
              "Успейте выгодным! Получите скидку -20% с выгодой. Запишитесь сейчас для получения высокоточного медицинского обследования по привлекательной цене"
            }
            p2={"Акция действует до "}
            p3={"22.03.2023"}
            img={white}
            imgWidth={"250px"}
          />
          <Card3
            className="sm:w-[350px] w-[530px]"
            bg={"#27C8DA"}
            p={"20px"}
            w={"530px"}
            h={"400px"}
            p1={"Скидка -20% на МРТ"}
            p4={
              "Успейте выгодным! Получите скидку -20% с выгодой. Запишитесь сейчас для получения высокоточного медицинского обследования по привлекательной цене"
            }
            p2={"Акция действует до "}
            p3={"22.03.2023"}
            img={white}
            imgWidth={"250px"}
          />
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] sm:flex-col justify-between gap-[20px] m-auto flex pt-[30px] pb-[30px]">
          <div
            className="dark:bg-[#2a327b] sm:w-[350px] w-[500px] dark:text-[white]"
            style={{
              height: "200px",
              boxShadow: "0 0 10px 1px grey",
              padding: "25px",
              borderRadius: "7px",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <img src={search} alt="" />
            <p>
              Узнайте, входит ли интересующее вас лечение в программу для вашего
              региона
            </p>
          </div>
          <div
            className="dark:bg-[#2a327b] sm:w-[350px] w-[500px] dark:text-[white]"
            style={{
              height: "200px",
              boxShadow: "0 0 10px 1px grey",
              padding: "25px",
              borderRadius: "7px",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <img src={pochta} alt="" />
            <p>
              Подготовьте необходимые документы и отправьте заявку на лечение
            </p>
          </div>
          <div
            className="dark:bg-[#2a327b] sm:w-[350px] w-[500px] dark:text-[white]"
            style={{
              height: "200px",
              boxShadow: "0 0 10px 1px grey",
              padding: "25px",
              borderRadius: "7px",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <img src={phone} alt="" />
            <p>
              В течение 3-х рабочих дней специалист отдела ОМС свяжется с вами
              по указанному вами номеру телефона
            </p>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <p className="w-[90%] m-auto pt-[20px] pb-[30px] text-[30px] dark:text-[white] font-[700]">
          Популярные анализы
        </p>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="start pt-[30px] pb-[120px] sm:grid-cols-1 sm:mt-[-20px] grid grid-cols-4 w-[90%] m-auto gap-[20px]">
          <div
            className="dark:bg-[#2a327b] dark:text-[white] p-[20px]"
            style={{ border: "1.5px solid grey", borderRadius: "5px" }}
          >
            <img src={a1} alt="" />
            <p className="text-grr font-[700] text-[20px]">Онкология</p>
            <p className="h-[3px] w-[50px] mt-[7px] mb-[7px] bg-grr"></p>
            <div className="flex flex-col gap-[10px]">
              <p>Гистология</p>
              <p>Онкомаркёры</p>
              <p>Цитология</p>
            </div>
          </div>
          <div
            className="p-[20px] dark:bg-[#2a327b] dark:text-[white]"
            style={{ border: "1.5px solid grey", borderRadius: "5px" }}
          >
            <img src={a2} alt="" />
            <p className="text-grr font-[700] text-[20px]">
              Исследования крови{" "}
            </p>
            <p className="h-[3px] w-[50px] mt-[7px] mb-[7px] bg-grr"></p>
            <div className="flex flex-col gap-[10px]">
              <p>Клинические исследования</p>
              <p>Биохимия</p>
              <p>Иммунология</p>
              <p>Гормоны</p>
            </div>
          </div>
          <div
            className="p-[20px] dark:bg-[#2a327b] dark:text-[white]"
            style={{ border: "1.5px solid grey", borderRadius: "5px" }}
          >
            <img src={a3} alt="" />
            <p className="text-grr font-[700] text-[20px]">Исследования мочи</p>
            <p className="h-[3px] w-[50px] mt-[7px] mb-[7px] bg-grr"></p>
            <div className="flex flex-col gap-[10px]">
              <p>Биохимический анализ мочи</p>
              <p>Общий анализ мочи</p>
              <p>Гормоны</p>
            </div>
          </div>
          <div
            className="p-[20px] dark:bg-[#2a327b] dark:text-[white]"
            style={{ border: "1.5px solid grey", borderRadius: "5px" }}
          >
            <img src={a4} alt="" />
            <p className="text-grr font-[700] text-[20px]">Аллергии</p>
            <p className="h-[3px] w-[50px] mt-[7px] mb-[7px] bg-grr"></p>
            <div className="flex flex-col gap-[10px]">
              <p>Аллергокомпоненты</p>
              <p>Индивидуальные аллергены</p>
              <p>Аллергия на лекарства</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[black] text-[white]">
        <div className="obshi pt-[30px] flex items-center justify-between w-[90%] m-auto">
          <div>
            <p className="text-[30px] font-[700] pb-[10px] sm:text-[24px]">
              Виды лабораторных анализов и исследований
            </p>
            <div className="two grid sm:grid-cols-1 sm:gap-[10px] sm:pb-[40px] grid-cols-2">
              <div className="left flex flex-col gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Общие исследования крови</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Биохимические исследования крови</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Онкомаркёры</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Общеклинические исследования кала</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Панели аллергенов</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Гистологические исследования</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Гормональные исследования крови</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Исследования мочи</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Иммунологические исследования крови</p>
                </div>
              </div>
              <div className="right flex flex-col gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Гематологические исследования</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Аллергологические исследования</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Исследования кала</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Аутоиммунные заболевания</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Исследование спермы</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Генетический анализ</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Исследования крови на инфекции</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Цитологические исследования</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={ones} alt="" />
                  <p>Исследования инфекционных заболеваний</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-[510px] mt-[-100px] sm:hidden"
              src={girl}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <p className="w-[90%] dark:text-[white] m-auto pt-[30px] text-[30px] font-[700]">
          Наши лицензии
        </p>
        <div className="w-[90%] m-auto sm:flex-col sm:gap-[20px] flex justify-between pb-[50px] pt-[30px]">
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
        </div>
      </section>
      <div className="dark:bg-[#2c3153] pb-[30px] pt-[40px]">
        <div className="grid rounded-[15px] dark:bg-[black] sm:grid-cols-1 grid-cols-2 bg-[black] w-[90%] m-auto text-[white]">
          <div className="w-[90%] m-auto flex justify-between">
            <div>
              <p className="text-[30px] sm:pt-[10px] font-[700] pb-[20px]">
                Хотите, мы Вам перезвоним?
              </p>
              <p>Оставьте заявку и мы подробно ответим на все Ваши вопросы!</p>
              <br />
              <div className="flex sm:flex-col justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px] font-[600]">Ваше ФИО</p>
                  <input
                    className="w-[310px] sm:w-[310px]"
                    style={{
                      height: "40px",
                      paddingLeft: "10px",
                      borderRadius: "30px",
                    }}
                    type="text"
                    placeholder={"Иванов Иван Иванович"}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px] sm:pt-[20px] font-[600]">
                    Номер телефона
                  </p>
                  <input
                    className="w-[310px] sm:w-[310px]"
                    style={{
                      height: "40px",
                      paddingLeft: "10px",
                      borderRadius: "30px",
                    }}
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              <br />
              <Button
                text={"Заказать звонок"}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"210px"}
                col={"white"}
                borRadius={"30px"}
              />
              <br />
              <div className="flex sm:grid text-[14px] gap-[6PX]">
                <p>Нажимая на кнопку Заказать звонок вы соглашаетесь с</p>
                <p className="text-grr underline sm:pb-[10px]">
                  политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={docs}
              className="ml-[12.4px] sm:hidden mt-[-10px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
