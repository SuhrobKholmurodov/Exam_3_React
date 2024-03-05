import React from "react";
import Card3 from "../../components/Card3";
import white from "../Tests/white.png";
import Button from "../../components/Button";
import docs from "../Doctors/docs.png";
import diplom from "../Home/diplom.png";

const Stock = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto">
          <p className="text-[grey]">Главная ></p>
          <p>Наши акции</p>
        </div>
        <p className="w-[90%] m-auto text-[30px] pt-[10px] font-[700]">
          Наши акции
        </p>
      </div>
      <section className="dark:bg-[#2c3153]">
        <div className="pt-[30px] sm:hidden w-[90%] m-auto justify-between flex">
          <Card3
            bg={"rgba(59, 185, 109, 1"}
            p={"20px"}
            w={"540px"}
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
            bg={"#27C8DA"}
            p={"20px"}
            w={"540px"}
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
        <div className="obshiy sm:grid-cols-1 gap-[10px] w-[90%] m-auto pt-[15px] grid grid-cols-4">
          <div className="bg-[#27C8DA] p-[10px] rounded-[5px]">
            <p className="text-[21px] text-[white] font-[700]">
              Скидка -20% на МРТ
            </p>
            <div className="flex items-center">
              <div className="flex flex-col gap-[70px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[white]">Акция действует до </p>
                  <p className="text-[23px] font-[700] text-[white]">
                    22.03.2023
                  </p>
                </div>
                <Button
                  text={"Подробнее"}
                  bg={"white"}
                  borRadius={"30px"}
                  col={"#3BB96D"}
                  h={"40px"}
                  w={"180px"}
                />
              </div>
              <div>
                <img className="w-[200px] h-[200px]" src={white} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#6567F2] p-[10px] rounded-[5px]">
            <p className="text-[21px] text-[white] font-[700]">
              Скидка -20% на МРТ
            </p>
            <div className="flex items-center">
              <div className="flex flex-col gap-[70px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[white]">Акция действует до </p>
                  <p className="text-[23px] font-[700] text-[white]">
                    22.03.2023
                  </p>
                </div>
                <Button
                  text={"Подробнее"}
                  bg={"white"}
                  borRadius={"30px"}
                  col={"#3BB96D"}
                  h={"40px"}
                  w={"180px"}
                />
              </div>
              <div>
                <img className="w-[200px] h-[200px]" src={white} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#F57676] p-[10px] rounded-[5px]">
            <p className="text-[21px] text-[white] font-[700]">
              Скидка -20% на МРТ
            </p>
            <div className="flex items-center">
              <div className="flex flex-col gap-[70px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[white]">Акция действует до </p>
                  <p className="text-[23px] font-[700] text-[white]">
                    22.03.2023
                  </p>
                </div>
                <Button
                  text={"Подробнее"}
                  bg={"white"}
                  borRadius={"30px"}
                  col={"#3BB96D"}
                  h={"40px"}
                  w={"180px"}
                />
              </div>
              <div>
                <img className="w-[200px] h-[200px]" src={white} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#FFDB5C] p-[10px] rounded-[5px]">
            <p className="text-[21px] text-[white] font-[700]">
              Скидка -20% на МРТ
            </p>
            <div className="flex items-center">
              <div className="flex flex-col gap-[70px]">
                <div className="flex flex-col">
                  <p className="text-[white]">Акция действует до </p>
                  <p className="text-[23px] font-[700] text-[white]">
                    22.03.2023
                  </p>
                </div>
                <Button
                  text={"Подробнее"}
                  bg={"white"}
                  borRadius={"30px"}
                  col={"#3BB96D"}
                  h={"40px"}
                  w={"180px"}
                />
              </div>
              <div>
                <img className="w-[200px] h-[200px]" src={white} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-[#2c3153]">
        <div className="flex items-center sm:flex-col gap-[10px] w-[90%] m-auto">
          <div className="pt-[15px] sm:hidden">
            <Card3
              bg={"rgba(59, 185, 109, 1"}
              p={"20px"}
              w={"540px"}
              h={"413px"}
              p1={"Скидка -20% на МРТ"}
              p4={
                "Успейте выгодным! Запишитесь сейчас для получения высокоточного медицинского обследования по привлекательной цене"
              }
              p2={"Акция действует до "}
              p3={"22.03.2023"}
              img={white}
              imgWidth={"150px"}
            />
          </div>
          <div className="obshiy gap-[10px] sm:grid-cols-1 w-[90%] m-auto pt-[15px] grid grid-cols-2">
            <div className="bg-[#27C8DA] p-[10px] rounded-[5px]">
              <p className="text-[21px] text-[white] font-[700]">
                Скидка -20% на МРТ
              </p>
              <div className="flex items-center">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="text-[white]">Акция действует до </p>
                    <p className="text-[23px] font-[700] text-[white]">
                      22.03.2023
                    </p>
                  </div>
                  <Button
                    text={"Подробнее"}
                    bg={"white"}
                    borRadius={"30px"}
                    col={"#3BB96D"}
                    h={"40px"}
                    w={"180px"}
                  />
                </div>
                <div>
                  <img className="w-[150px] h-[150px]" src={white} alt="" />
                </div>
              </div>
            </div>
            <div className="bg-[#6567F2] p-[10px] rounded-[5px]">
              <p className="text-[21px] text-[white] font-[700]">
                Скидка -20% на МРТ
              </p>
              <div className="flex items-center">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="text-[white]">Акция действует до </p>
                    <p className="text-[23px] font-[700] text-[white]">
                      22.03.2023
                    </p>
                  </div>
                  <Button
                    text={"Подробнее"}
                    bg={"white"}
                    borRadius={"30px"}
                    col={"#3BB96D"}
                    h={"40px"}
                    w={"180px"}
                  />
                </div>
                <div>
                  <img className="w-[150px] h-[150px]" src={white} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-[#F57676] p-[10px] rounded-[5px]">
              <p className="text-[21px] text-[white] font-[700]">
                Скидка -20% на МРТ
              </p>
              <div className="flex items-center">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="text-[white]">Акция действует до </p>
                    <p className="text-[23px] font-[700] text-[white]">
                      22.03.2023
                    </p>
                  </div>
                  <Button
                    text={"Подробнее"}
                    bg={"white"}
                    borRadius={"30px"}
                    col={"#3BB96D"}
                    h={"40px"}
                    w={"180px"}
                  />
                </div>
                <div>
                  <img className="w-[150px] h-[150px]" src={white} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-[#FFDB5C] p-[10px] rounded-[5px]">
              <p className="text-[21px] text-[white] font-[700]">
                Скидка -20% на МРТ
              </p>
              <div className="flex items-center">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="text-[white]">Акция действует до </p>
                    <p className="text-[23px] font-[700] text-[white]">
                      22.03.2023
                    </p>
                  </div>
                  <Button
                    text={"Подробнее"}
                    bg={"white"}
                    borRadius={"30px"}
                    col={"#3BB96D"}
                    h={"40px"}
                    w={"180px"}
                  />
                </div>
                <div>
                  <img className="w-[150px] h-[150px]" src={white} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="pt-[15px] sm:hidden w-[90%] m-auto justify-between flex">
          <Card3
            bg={"#27C8DA"}
            p={"20px"}
            w={"540px"}
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
            bg={"rgba(59, 185, 109, 1"}
            p={"20px"}
            w={"540px"}
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
        <p className="w-[90%] dark:text-[white] m-auto pt-[30px] text-[30px] font-[700]">
          Наши лицензии
        </p>
        <div className="w-[90%] m-auto sm:gap-[20px] flex sm:flex-col justify-between pb-[50px] pt-[30px]">
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

export default Stock;
