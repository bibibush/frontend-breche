import { useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function Calendar() {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };
  const week = useMemo(
    () => ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    []
  );
  const week2 = useMemo(
    () => ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    []
  );

  const [orders, setOrders] = useState([]);
  const [monthSelect, setMonthSelect] = useState(today.month);
  const [yearSelect, setYearSelect] = useState(today.year);
  const [daySelect, setDaySelect] = useState(today.date);

  const dateTotalCount = new Date(yearSelect, monthSelect, 0).getDate();

  const getApi = useCallback(async () => {
    try {
      const res = await axios.get("/api/ad/list/");
      console.log(res.data);
      const days = document.querySelectorAll(".day");
      days.forEach((day) => {
        const oday = res.data.find(
          (order) =>
            new Date(order.date).toDateString() ===
            new Date(
              yearSelect,
              monthSelect - 1,
              Number(day.innerText)
            ).toDateString()
        );
        if (oday !== undefined) {
          day.classList.add("oday");
        }
      });
      setOrders(res.data);
    } catch (err) {
      console.log(err.response);
      window.location.href = "/";
    }
  }, [monthSelect, yearSelect]);

  const dayClick = (event) => {
    setDaySelect(Number(event.target.innerText));
    const selected = document.querySelector(".selected_day");
    const element = event.target;

    if (selected) {
      selected.classList.remove("selected_day");
    }
    element.classList.add("selected_day");
  };

  const yearMonthSelect = useCallback((event) => {
    setMonthSelect(new Date(event.target.value).getMonth() + 1);
    setYearSelect(new Date(event.target.value).getFullYear());
  }, []);
  console.log(monthSelect, daySelect, yearSelect);
  const YearMonthControl = useCallback(() => {
    let select = [];
    let startYear = today.year - 1;
    let endYear = today.year + 1;
    let startEndMonth = today.month;

    for (let i = 0; i < 25; i++) {
      select.push(
        <option
          key={i}
          value={new Date(
            startEndMonth + i > 13
              ? startEndMonth + i - 12 > 13
                ? endYear
                : startYear + 1
              : startYear,
            startEndMonth + i - 1 >= 13
              ? startEndMonth + i - 12 - 1 >= 13
                ? startEndMonth + i - 24 - 1
                : startEndMonth + i - 12 - 1
              : startEndMonth + i - 1,
            1
          ).toDateString()}
        >{`${
          startEndMonth + i >= 13
            ? startEndMonth + i - 12 >= 13
              ? startEndMonth + i - 24
              : startEndMonth + i - 12
            : startEndMonth + i
        } / ${
          startEndMonth + i >= 13
            ? startEndMonth + i - 12 >= 13
              ? endYear
              : startYear + 1
            : startYear
        }`}</option>
      );
    }
    return (
      <Form.Select
        defaultValue={new Date(yearSelect, monthSelect - 1, 1).toDateString()}
        onChange={yearMonthSelect}
      >
        {select}
      </Form.Select>
    );
  }, [today.year, today.month, yearMonthSelect, monthSelect, yearSelect]);

  const ReturnWeek = useCallback(() => {
    let weekArr = [];
    week.forEach((w, i) => {
      weekArr.push(
        <div
          key={i + 1}
          className={w === "Sam" || w === "Dim" ? "weekday weekend" : "weekday"}
        >
          {w}
        </div>
      );
    });
    return weekArr;
  }, [week]);

  const ReturnDays = useCallback(() => {
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(yearSelect, monthSelect - 1, 1).getDay();

      if (week2[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div
              key={i + 1}
              className={
                new Date(yearSelect, monthSelect - 1, i + 1).getDay() === 0 ||
                new Date(yearSelect, monthSelect - 1, i + 1).getDay() === 6
                  ? "day weekend_day"
                  : new Date().toDateString() ===
                    new Date(yearSelect, monthSelect - 1, i + 1).toDateString()
                  ? "day selected_day"
                  : "day"
              }
              onClick={dayClick}
            >
              {i + 1}
            </div>
          );
        }
        return dayArr;
      } else {
        dayArr.push(<div key={nowDay} className="day day_vide"></div>);
      }
    }
  }, [dateTotalCount, monthSelect, yearSelect, week, week2]);

  const GetOrder = useCallback(() => {
    const order = orders.find(
      (order) =>
        new Date(order.date).toDateString() ===
        new Date(yearSelect, monthSelect - 1, daySelect).toDateString()
    );
    if (order !== undefined) {
      const { nom, date, entreprise, id } = order;

      return (
        <div className="orderbox">
          <p>
            {new Date(date).getDate()} / {new Date(date).getMonth() + 1} /{" "}
            {new Date(date).getFullYear()}
          </p>
          <a href={`/les-commandes/detail?id=${id}`}>
            <div className="orderbox_content">
              {entreprise} - {nom}
            </div>
          </a>
        </div>
      );
    } else {
      return (
        <div className="orderbox">
          <p>
            {daySelect} / {monthSelect} / {yearSelect}
          </p>
        </div>
      );
    }
  }, [orders, yearSelect, monthSelect, daySelect]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <section className="gerer-calendar">
      <div className="calendar-container">
        <div className="title">
          <YearMonthControl />
        </div>
        <div className="week">
          <ReturnWeek />
        </div>
        <div className="date">
          <ReturnDays />
        </div>
      </div>
      <GetOrder />
    </section>
  );
}
