import { useState, useEffect } from "react";
const UpcomingBirthdayCard = ({ birthdayarray }) => {
  const [birthDayList, setBirthDayList] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);
  const [nextMonth, setNextMonth] = useState([]);
  const getBirthDay = () => {
    let sortedArray = birthdayarray.sort(function (a, b) {
      let indexA =
        "" + new Date(a.birthdaydate).getMonth() + a.birthdaydate.split("-")[2];
      let indexB =
        "" + new Date(b.birthdaydate).getMonth() + b.birthdaydate.split("-")[2];
      return indexA - indexB;
    });

    setBirthDayList(sortedArray);
    let filteredArrayOne = sortedArray.filter(
      (item) =>
        new Date(item.birthdaydate).getMonth() ===
        new Date(Date.now()).getMonth()
    );
    setThisMonth(filteredArrayOne);
  };
  useEffect(() => {
    getBirthDay();
  }, []);
  return (
    <>
      <h3>Upcoming Birthdays</h3>
      {thisMonth &&
        thisMonth.map((user) => {
          const { firstname, lastname, birthdaydate, role, id } = user;
          return (
            <div key={id} className="upcomingbirthday">
              <div>
                <img src={require("../images/image-2.png")}></img>
                <h4>
                  {`${firstname} ${lastname}`} <br></br>
                  <span>{role}</span>
                </h4>
              </div>
              <p>{birthdaydate}</p>
            </div>
          );
        })}
    </>
  );
};

export default UpcomingBirthdayCard;
