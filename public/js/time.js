import "document-registry.css";
const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();



{/* <form action="/login" method="post">
                <label>캡슐이름:
                    <input type="text" id="capname" name="capname" value="캡슐이름" placeholder="1 many..">
                </label>
                <br>
                <label>내용:
                    <input type="text" id="capcontent" name="capcontent" value="내용" placeholder="What is ..">
                </label>
                <br>
                <label>이메일:
                    <input type="text" id="capemail" name="capemail" value="이메일" placeholder="이메일">
                </label>
                <br>
                <label>약속일:
                    <input type="text" id="proday" name="proday" value="약속일" placeholder="2222-02-22-">
                </label>
                <br>
                <label>지갑주소:
                    <input type="text" id="walladd" name="walladd" value="지갑주소" placeholder="Where is ..">
                </label>
                <br>
                <label>제출:
                    <input type="button" id="itemUploadButton" value="submit">
                </label>
                <input type="submit" />
              </form> */}