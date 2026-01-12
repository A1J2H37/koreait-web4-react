// JSX : JS의 확장 문법
// HTML 태그처럼 보이지만 실제로는 JS코드

// 컴포넌트 - JSX를 리턴하는 함수
function App01() {
    console.log("App01이 호출되었습니다.")
    const title = "React 수업 시작"
    const content = "jsx가 뮌지 알아보자"
    const name = "리액트"
    const myTag = <h1>{name}</h1>

    // JSX 규칙
    // 1. 리턴되는 것은 반드시 하나의 태그
    // 2. 모든 태그는 닫혀야 함
    // 3. 태그사이에 혹은 태그 안에 js코드를 삽입할 경우 {} 이용

    return(
        // 태그가 js로 변환 될건데
        // 이를 jsx라고 함
        // 리턴하는건 실체 html이 아님
        <div>
            {myTag}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

// export: 외부에서 접근하게 함
// default: 해당 파일에서 대표로 내보낼 값 하나
export default App01;