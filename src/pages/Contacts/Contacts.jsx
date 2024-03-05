import React from "react";
import map from "../Home/map.png";
import Card2 from "../../components/Card2";
import onemen from "../Home/onemen.png";
import Button from "../../components/Button";
import docs from "../Doctors/docs.png";

const Contacts = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto">
          <p className="pb-[70px] text-[grey]">Главная ></p>
          <p>Наши контакты</p>
        </div>
      </div>
      <section>
        <div className="flex sm:flex-col items-center justify-between w-[100%]">
          <div className="bg-[black] sm:w-[380px] flex sm:text-start flex-col justify-between p-[29.1px] text-[white] w-[410px]">
            <p className="text-[30px] font-[700] pb-[10px]">Наши контакты</p>
            <div>
              <p className="pb-[10px]">
                ООО «МЕДСЕРВИС», ИНН: 7017429626, КПП: 701701001, ОГРН:
                1177031079180, дата регистрации: 03.08.2017
              </p>
              <p className="pb-[10px]">
                Главный врач: Храмов Павел Александрович
              </p>
              <p className="pb-[10px]">
                Прием граждан по вопросам качества оказания медицинских услуг –
                каждый четверг по предварительной записи по телефону : (3822)
                50-00-49
              </p>
            </div>
            <div className="pb-[10px]">
              <p>Адрес</p>
              <p>г. Томск, ул. 79 Гвардейской дивизии, 6</p>
            </div>
            <div className="pb-[10px]">
              <p>Телефон</p>
              <p>8 (3822) 50-00-49</p>
            </div>
            <div>
              <p className="pb-[10px]">Почта</p>
              <p>info@docnear.ru</p>
            </div>
            <div>
              <p>График работы</p>
              <p>
                Понедельник — пятница: 8.00 — 20.00 Суббота: 9.00 — 17.00
                Воскресенье: 10.00 — 16.00
              </p>
            </div>
          </div>
          <div>
            <img src={map} alt="" />
          </div>
        </div>
      </section>

      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className=" w-[90%] m-auto pt-[30px] pb-[30px]">
          <p className="text-[33px] sm:text-center font-[600]">
            Наши специалисты
          </p>
        </div>
        <div>
          <div className="flex sm:flex-col sm:gap-[20px] sm:items-center w-[90%] m-auto justify-between">
            <div>
              <Card2
                img={onemen}
                p1={"Иванов Иван Иванович"}
                p2={"Врач-уролог"}
              />
              <Button
                text={"Запись на прием"}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={"Иванов Иван Иванович"}
                p2={"Врач-уролог"}
              />
              <Button
                text={"Запись на прием"}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={"Иванов Иван Иванович"}
                p2={"Врач-уролог"}
              />
              <Button
                text={"Запись на прием"}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={"Иванов Иван Иванович"}
                p2={"Врач-уролог"}
              />
              <Button
                text={"Запись на прием"}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="dark:bg-[#2c3153] pb-[30px] pt-[40px]">
        <div className="grid rounded-[15px] dark:bg-[black] grid-cols-2 bg-[black] w-[90%] m-auto text-[white]">
          <div className="w-[90%] m-auto flex justify-between">
            <div>
              <p className="text-[30px] font-[700] pb-[20px]">
                Хотите, мы Вам перезвоним?
              </p>
              <p>Оставьте заявку и мы подробно ответим на все Ваши вопросы!</p>
              <br />
              <div className="flex sm:flex-col sm:gap-[20px] justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px] font-[600]">Ваше ФИО</p>
                  <input
                    className="w-[310px] sm:w-[330px]"
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
                  <p className="text-[20px] f0nt-[600]">Номер телефона</p>
                  <input
                    className="w-[310px] sm:w-[330px]"
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
              <div className="flex text-[14px] sm:flex-col gap-[6PX]">
                <p>Нажимая на кнопку Заказать звонок вы соглашаетесь с</p>
                <p style={{ textDecoration: "underline" }} className="text-grr sm:pb-[10px]">
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

export default Contacts;
