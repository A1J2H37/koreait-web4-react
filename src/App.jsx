// default로 export하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능
import Study from "./react-study/study"

function App() {
    return (
      <>
          <Study />    
      </>
  );
}

export default App

// github에 올라갈때는 node_modules가 업로드 안됨
// 타 pc에서 실행할때는 clone하고
// 터미널에 npm install 입력하여
// node_modules를 생성하고 실행하여야 함