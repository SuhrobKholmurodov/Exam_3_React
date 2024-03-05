import React from "react";
import put from "../Clinic/put.png";
import scrol2 from "../Clinic/scrol2.png";
import stars from "../Clinic/stars.png";
import Button from "../../components/Button";
import docs from "../Doctors/docs.png";
import diplom from "../Home/diplom.png";
const Clinic = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] pt-[10px] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto pb-[20px]">
          <p className="text-[grey]">Главная ></p>
          <p>О клинике</p>
        </div>
        <p className="w-[90%] m-auto text-[30px] font-[700]">О клинике</p>
        <p className="w-[90%] m-auto text-[16px] font-[400] pt-[10px]">
          A clinic is a vital healthcare facility where medical professionals
          provide primary care services to patients. Clinics offer a wide range
          of medical services, including consultations, examinations,
          vaccinations, and treatments for various health conditions. Patients
          visit clinics for routine check-ups, minor illnesses, and chronic
          disease management. Clinics play a crucial role in promoting
          preventive care and early detection of health issues. They are often
          accessible and convenient for patients seeking medical attention
          without the need for hospitalization. Clinics are staffed with
          doctors, nurses, and support staff who work together to ensure
          patients receive quality healthcare in a welcoming environment.
        </p>
      </div>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="w-[90%] m-auto pt-[40px] pb-[30px]">
          <div className="left sm:flex-col flex items-center gap-[10px]">
            <div className="sm:hidden">
              <img className="h-[600px] w-[20px]" src={put} alt="" />
            </div>
            <div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2022
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2021
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2020
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2019
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2017
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-center items-center gap-[20px]">
                <p className="text-[77px] font-[Raleway] text-grr font-[700]">
                  2005
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  adipiscing amet habitant laoreet dui at at. Felis et duis erat
                  proin. Arcu faucibus accumsan diam neque, egestas nibh dolor
                  id vulputate. In odio nisi facilisis erat leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="w-[90%] m-auto flex items-center justify-between pt-[10px] pb-[20px]">
          <p className="text-[30px] sm:text-[27.8px] font-[700]">
            Отзывы наших пациентов
          </p>
          <img src={scrol2} className="sm:hidden" alt="" />
        </div>
      </section>

      {/* CArd */}
      <section className="dark:bg-[#2c3153]">
        <div className="grid gap-[20px] sm:grid-cols-1 pt-[20px] pb-[20px] grid-cols-2 w-[90%] m-auto">
          <div
            style={{ border: "1.5px solid #C4CDD4" }}
            className="flex dark:text-[white] dark:bg-[#2a327b] rounded-[10px] flex-col gap-[20px] p-[20px]"
          >
            <div className="flex items-center justify-between">
              <p>Анна Петрова, 37 лет</p>
              <img src={stars} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tortor phasellus feugiat rhoncus id. Feugiat a, est urna laoreet
              aenean arcu tellus mauris sagittis. Morbi praesent nunc tortor
              risus aliquam lorem quam mauris. Enim, vitae, mi a sapien lectus
              dictum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.{" "}
            </p>
            <p className="underline text-grr">Читать полностью</p>
            <div className="flex  items-center justify-between">
              <p>09.08.2021</p>
              <p>
                Врач:{" "}
                <span className="underline text-grr">Петров Иван Иванович</span>
              </p>
            </div>
          </div>
          <div
            style={{ border: "1.5px solid #C4CDD4" }}
            className="flex dark:text-[white] dark:bg-[#2a327b] flex-col rounded-[10px] gap-[20px] p-[20px]"
          >
            <div className="flex justify-between">
              <p>Анна Петрова, 37 лет</p>
              <img src={stars} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tortor phasellus feugiat rhoncus id. Feugiat a, est urna laoreet
              aenean arcu tellus mauris sagittis. Morbi praesent nunc tortor
              risus aliquam lorem quam mauris. Enim, vitae, mi a sapien lectus
              dictum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.{" "}
            </p>
            <p className="underline text-grr">Читать полностью</p>
            <div className="flex justify-between">
              <p>09.08.2021</p>
              <p>
                Врач:{" "}
                <span className="underline text-grr">Петров Иван Иванович</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] m-auto flex justify-center pt-[20px] pb-[20px]">
          <Button
            text={"Все отзывы"}
            col={"#3BB96D"}
            borRadius={"30px"}
            brd={"2px solid #3BB96D"}
            h={"40px"}
            w={"180px"}
          />
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

export default Clinic;
