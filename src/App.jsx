// default로 export하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능
import 첫번째 from "./react-study/01-jsx-and-component/App01"
import 두번째 from "./react-study/01-jsx-and-component/App02"
import 네번째 from "./react-study/01-jsx-and-component/App04/App04"
import App05 from "./react-study/01-jsx-and-component/App05/App05-01"
import App06 from "./react-study/01-jsx-and-component/App06/App06"
import UseState01 from "./react-study/02-useState/UseState01"
import UseState02 from "./react-study/02-useState/UseState02"
import UseState03 from "./react-study/02-useState/UseState03"

function App() {
    return (
      <>
        {/* App01 호출 */}
        {/* <첫번째/> */}
        {/* <두번째/> */}
        {/* <네번째/> */}
        {/* <App05/> */}
        {/* <App06/> */}
        {/* <UseState01 /> */}
        {/* <UseState02 /> */}
        <UseState03 />
      </>
  )
}

export default App

// github에 올라갈때는 node_modules가 업로드 안됨
// 타 pc에서 실행할때는 clone하고
// 터미널에 npm install 입력하여
// node_modules를 생성하고 실행하여야 함