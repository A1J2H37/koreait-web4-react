export default function AuthManager({children, isLogin}) {
    if(!isLogin) {
        return <p>로그인이 필요합니다.</p>
    }
    return <div>{children}</div>;
}
