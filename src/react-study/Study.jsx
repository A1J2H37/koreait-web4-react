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
    11: <ModalContainer />
  };


  return stateStudy[11]
}
