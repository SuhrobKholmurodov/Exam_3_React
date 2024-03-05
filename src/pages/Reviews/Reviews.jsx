import React from "react";
import docs from "../Doctors/docs.png";
import scrol2 from "../Clinic/scrol2.png";
import stars from "../Clinic/stars.png";
import Button from "../../components/Button";

const Reviews = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto">
          <p className="text-[grey]">Главная ></p>
          <p>Отзывы наших пациентов</p>
        </div>
        <p className="w-[90%] m-auto text-[30px] pt-[20px] font-[700]">
          Отзывы наших пациентов
        </p>
      </div>
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
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] m-auto flex justify-center pt-[20px] pb-[20px]">
          <Button
            text={"Еще отзывы"}
            col={"#3BB96D"}
            borRadius={"30px"}
            brd={"2px solid #3BB96D"}
            h={"40px"}
            w={"180px"}
          />
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
              className="ml-[12.4px] mt-[-10px] sm:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
