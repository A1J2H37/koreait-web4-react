
const overlayStyle = { // 배경
    position: "fixed",
    top: 0,
    left: 0,
    width: "100w",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
const modalStyle = {
    backgroundColor: "white",
    width: "420px",
    height: "360px",
    padding: "20px",
    borderRadius: "8px",
}


export default function Modal({isOpen, post, onClick}) {
     if (!isOpen) return null;
    // null, falsy, [], boolean은 jsx에서 표현안됨
    return (
        <div css={overlayStyle}>
            <div style={modalStyle}>
                <h2>
                    {post.title}
                </h2>
                <p>
                    {post.content}
                </p>
                <button onClick={onClick}>닫기</button>
            </div>
        </div>
    )
}
