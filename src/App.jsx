// default로 export하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능
import Study from "./react-study/Study"
import MyToast from "./react-study/ZuStand/myToast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 쿼리클라이언트 - get요청 결과 데이터를 전역으로 들고있음
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // 쿼리 옵션
            // staleTime - 신선한 상태로 유지되는 시간
            // refetchOnWindowFocus - 윈도우 포커스시 자동 리패치
        }
    }
});

function App() {
    return (
        // QueryClientProvider: 쿼리클라이언트를 하위
        // 컴포넌트에서 사용핳 수 있게 제공
      <QueryClientProvider client={queryClient}>
          <MyToast />
          <Study />    
      </QueryClientProvider>
  );
}

export default App

// github에 올라갈때는 node_modules가 업로드 안됨
// 타 pc에서 실행할때는 clone하고
// 터미널에 npm install 입력하여
// node_modules를 생성하고 실행하여야 함