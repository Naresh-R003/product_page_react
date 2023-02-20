import "./styles.css";
import Price from "./price";
import Description from "./description";

export default function App() {
  return (
    <div className="frame">
      <div className="App">
        <img
          src="https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UL320_.jpg"
          alt="img"
        />
      </div>
      <div id="dis">
        <p id="para">
          <b>
            Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+
            Sports Modes, 240*240 PX High Res with SpO2, Heart Rate Monitoring &
            IP67 Rating.
          </b>
        </p>
        <h4>Visit the Fire Boltt store </h4>
        <Price />
        <Description />
      </div>
    </div>
  );
}
