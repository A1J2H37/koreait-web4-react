// children props
// 컴포넌트 태그 사이애 넣은 내용들을
// 자식 컴포넌트에 그대로 받는 props
export default function Layout({ children }) {
  return (
    <div style={{width: "600px", margin: "0 auto", backgroundColor: "#eee"}}>
        <header style={{borderBottom: "1px solid #ccc" }}>
            <h1>레이아웃 연습</h1>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}
