import ModalContainer from "./02-useState/Modal/ModalContainer";
import NavBar from "./02-useState/NavBar/NavBar";
import UseState01 from "./02-useState/UseState01"
import UseState02 from "./02-useState/UseState02";
import UseState03 from "./02-useState/UseState03";
import UseState04 from "./02-useState/UseState04";
import UseState05 from "./02-useState/UseState05";
import UseState06 from "./02-useState/UseState06";
import UseState07 from "./02-useState/UseState07";
import UseState08 from "./02-useState/UseState08";
import UseState09 from "./02-useState/UseState09";
import Unmount from "./03-useEffect/unmount/Unmount";
import UseEffect01 from "./03-useEffect/UseEffect01";
import UseEffect02 from "./03-useEffect/UseEffect02";
import UseEffect03 from "./03-useEffect/UseEffect03";
import UseEffect04 from "./03-useEffect/UseEffect04";
import UseRef01 from "./04-useRef/UseRef01";
import UseRef02 from "./04-useRef/UseRef02";
import Axios01 from "./Axios/Axios01";
import Axios02 from "./Axios/Axios02";
import Axios03 from "./Axios/Axios03";
import Emotion01 from "./Emotion/Emotion01";
import Emotion02 from "./Emotion/Emotion02";
import Router01 from "./ReactRouter/Router01/Router01";
import Router02 from "./ReactRouter/Router02/Router02";
import Router03 from "./ReactRouter/Router03/Router03";
import Router04 from "./ReactRouter/Router04/Router04";
import Router05 from "./ReactRouter/Router05/Router05";
import Zustand01 from "./ZuStand/Zustand01";
import ZuStand02 from "./ZuStand/ZuStand02";
import Zustand03 from "./ZuStand/Zustand03";
import Zustand04 from "./ZuStand/Zustand04";

export default function Study() {
  const stateStudy = {
    1: <Zustand01 />,
    2: <ZuStand02 />,
    3: <Zustand03 />,
    4: <Zustand04 />,
    5: <Axios01 />,
    6: <Axios02 />,
    7: <Axios03 />,
  };


  return stateStudy[7]
}
