import React from "react";
import Button from "../../components/Button";
import hello from "../Diagnos/hello.png";
import search from "../Diagnos/search.png";
import pochta from "../Diagnos/pochta.png";
import phone from "../Diagnos/phone.png";
import bab from "../Diagnos/bab.png";
import pap from "../Diagnos/pap.png";

const Diagnos = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] pt-[10px] dark:text-[white]">
        <div className="flex pt-[10px] w-[90%] m-auto pb-[20px]">
          <p className="text-[grey]">Главная ></p>
          <p>Лечение по ОМС</p>
        </div>
      </div>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-[40px] gap-[120px] w-[90%] m-auto items-center">
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="text-[30px] font-[700] sm:text-[35px]">
              Лечение по ОМС
            </p>
            <p>
              Лечение в частной клинике не всегда стоит больших денег. В наших
              клиниках жители разных регионов России могут получить услуги по
              полису обязательного медицинского страхования (ОМС).
            </p>
            <Button
              text={"Как получить лечение"}
              h={"40px"}
              w={"210px"}
              bg={"rgba(59, 185, 109, 1)"}
              borRadius={"30px"}
              col={"white"}
            />
          </div>
          <div>
            <img src={hello} alt="" />
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153] pt-[30px] pb-[30px] dark:text-[white]">
        <p className="w-[90%] m-auto text-[30px] font-[700]">
          Как получить лечение?
        </p>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] sm:flex-col sm:gap-[50px] justify-between gap-[20px] m-auto flex pt-[30px] pb-[30px]">
          <div
            className="dark:bg-[#2a327b] w-[500px] sm:w-[350px] dark:text-[white]"
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
            className="dark:bg-[#2a327b] w-[500px] sm:w-[350px] dark:text-[white]"
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
            className="dark:bg-[#2a327b] w-[500px] sm:w-[350px] dark:text-[white]"
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
        <p className="w-[90%] m-auto text-[30px] dark:text-[white] pt-[20px] pb-[20px]">
          Все направления лечения по ОМС
        </p>
      </section>
      <section className="kalon dark:bg-[#2c3153]">
        <div className="w-[90%] m-auto">
          <div className="three sm:grid-cols-1 pt-[20px] pb-[20px] gap-[20px] grid grid-cols-3">
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white]  flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Оториноларингология</p>
              <p>
                Порядок и условия предоставления медицинской помощи по полису
                ОМС
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Сурдология</p>
              <p>Более 600 схем лечения на оригинальных препаратах</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Педиатрия</p>
              <p>Удаление гемангиом и винных пятен</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
          </div>
          <div className="two grid grid-cols-2 sm:grid-cols-1 gap-[20px]">
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#1a227b] dark:text-[white]  bg-grey flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Неврология</p>
              <p>
                Эндопротезирование тазобедренных и коленных суставов,
                реконструктивные операции на кисти и стопе.
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Терапия</p>
              <p>
                Петлевая пластика уретры с использованием петлевого,
                синтетического, сетчатого протеза при недержании мочи
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
          </div>
          <div className="three sm:grid-cols-1 pt-[20px] pb-[20px] gap-[20px] grid grid-cols-3">
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Ревматология</p>
              <p>
                Для взрослых и детей: удаление катаракты, лечение птоза и
                косоглазия
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Гастроэнтерология</p>
              <p>Реконструктивные операции на позвоночнике</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">УЗИ- диагностика</p>
              <p>Для жителей Санкт-Петербурга и регионов России</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
          </div>
          <div className="two sm:grid-cols-1 grid grid-cols-2 gap-[20px]">
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">
                Кардиология и функциональная диагностика
              </p>
              <p>
                Генно-инженерная терапия ревматических заболеваний по ОМС в
                «Скандинавии»
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Эндокринология</p>
              <p>
                Резекция печени или одного сегмента печени и эндоскопические
                операции на органах ЖКТ
              </p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
          </div>
          <div className="three sm:grid-cols-1 flex-wrap pt-[20px] pb-[20px] gap-[20px] grid grid-cols-3">
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Общая хирургия</p>
              <p>Верификация образования кожи</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Урология</p>
              <p>МРТ и КТ для взрослых и детей</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
            <div
              style={{ boxShadow: "0 0 10px 1px grey" }}
              className="p-[20px] dark:bg-[#2a327b] dark:text-[white] flex flex-col gap-[10px] rounded-[10px]"
            >
              <p className="tex-[20px]  font-[700]">Дневной стационар </p>
              <p>Удаление гигантских миом и операции при недержании мочи</p>
              <p
                className="text-[#3BB96D]"
                style={{ textDecoration: "underline" }}
              >
                Подробнее
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div>
          <img className="w-[90%] m-auto pt-[40px]" src={bab} alt="" />
        </div>
      </section>
      <section className="dark:bg-[#2c3153] pt-[30px]">
        <p className="w-[90%] m-auto text-[30px] font-[700] sm:text-[25px] pb-[20px] dark:text-[white]">
          Заявка на лечение по ОМС
        </p>
        <p className="w-[90%] m-auto dark:text-[white] pb-[20px]">
          Заполните поля ниже и прикрепите документ, чтобы отправить заявку
        </p>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="obsiy grid grid-cols-2 sm:grid-cols-1 w-[90%] gap-[20px] m-auto pt-[30px] pb-[30px]">
          <div className="left gap-[20px] sm:grid-cols-1 grid grid-cols-2 m-auto">
            <div>
              <p className="pb-[10px]">Ваше ФИО</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div>
              <p className="pb-[10px]">Дата рождения</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="21.09.2000"
              />
            </div>
            <div>
              <p className="pb-[10px]">Профиль</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="..."
              />
            </div>
            <div>
              <p className="pb-[10px]">Медицинская услуга</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="Эндокринология"
              />
            </div>
            <div>
              <p className="pb-[10px]">Причина обращения</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[535px] h-[40px]"
                type="text"
                placeholder="Причина обращения  "
              />
            </div>
          </div>
          <div className="right gap-[20px] grid grid-cols-2 sm:grid-cols-1 m-auto">
            <div>
              <p className="pb-[10px]">E-mail</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="Poshta@gmail.com "
              />
            </div>
            <div>
              <p className="pb-[10px]">Номер телефона</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <p className="pb-[10px]">Регион</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="Эндокринология"
              />
            </div>
            <div>
              <p className="pb-[10px]">ФИО и телефон вашего врача</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[250px] h-[40px]"
                type="text"
                placeholder="Иванова Анна +7 (___) ___-__-__"
              />
            </div>
            <div>
              <p className="pb-[10px]">Откуда вы узнали о нас?</p>
              <input
                className="sm:w-[345px] rounded-[30px] bg-grey pl-[10px] w-[535px] h-[40px]"
                type="text"
                placeholder="Интернет"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="w-[90%] flex flex-col gap-[20px] m-auto pt-[20px] pb-[40px]">
          <p>
            Не забудьте прикрепить выписку из медицинской документации или
            <br></br>
            результаты исследований в соответствии с перечнем выше
          </p>
          <div className="flex items-center gap-[10px] text-grr">
            <img src={pap} alt="" />
            <p className="text-[18px] font-[600]">Прикрепить документы</p>
          </div>
          <Button
            text={"Оставить заявку"}
            borRadius={"30px"}
            h={"40px"}
            w={"200px"}
            col={"white"}
            bg={"#3BB96D"}
          />
          <p className="sm:text-[13px]">
            Нажимая на кнопку Оставить заявку вы соглашаетесь{" "}
            <span className="text-grr underline">
              с политикой конфиденциальности
            </span>
            <br></br> и даете согласие на
            <span className="text-grr underline">
              обработку персональных данных
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Diagnos;
