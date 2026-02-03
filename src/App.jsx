// default로 export하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Study from "./react-study/Study";
import MyToast from "./react-study/Zustand/MyToast";
import Main from "./mini-project/Main";


// 쿼리클라이언트 - get요청 결과 데이터를 전역상태로 들고있음
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // 쿼리 옵션
            // staleTime - 신선한 상태로 유지되는 시간(기본 0)
            // refetchOnWindowFocus - 윈도우 포커스시 자동 리패치(기본 true)
        }
    }
});


function App() {
    return (
        // QueryClientProvider: 쿼리클라이언트를 하위 컴포넌트에서 사용할 수 있게 제공
        // useQuery, useMutation 훅을 사용가능
        // <QueryClientProvider client={queryClient}>
        //     <MyToast />
        //     <Study />
        // </QueryClientProvider>
        <Main />
    );
}

export default App;