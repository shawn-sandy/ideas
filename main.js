import "@fortawesome/fontawesome-free/css/regular.css";
import "@shawnsandy/bootstrap-lite";
import "./system/styles/styles.scss";

import { hello } from "./system/js";
var hi = hello();
console.log(hi);
var sayhi = hello("What's your name");
console.log(sayhi);
