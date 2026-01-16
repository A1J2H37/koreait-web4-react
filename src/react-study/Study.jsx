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

export default function Study() {
  const stateStudy = {
    1: <UseState01 />,
    2: <UseState02 />,
    3: <UseState03 />,
    4: <UseState04 />,
    5: <UseState05 />,
    6: <UseState06 />,
    7: <UseState07 />,
    8: <UseState08 />,
    9: <UseState09 />,
    10: <NavBar />,
    11: <ModalContainer />,
    12: <UseEffect01 />,
    13: <Unmount />,
    14: <UseEffect02 />,
    15: <UseEffect03 />,
    16: <UseEffect04 />,
  };


  return stateStudy[16]
}
