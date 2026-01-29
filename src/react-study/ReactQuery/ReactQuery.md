설치 - npm install @tanstack/react-query

- 전역상태 관리
- react hook 형태로 2가지 hook 함수를 제공
1. useQuery(get 요청용)
- 컴포넌트 마운트시 자동으로 데이터 조회
- 로딩, 에러에 대한 상태를 자동 관리
- refetch 시점을 자동으로 관리
- 데이터 캐싱(시간, useMutation의 함수가 실행시)
시간, useMutation의 함수가 실행시 아닌 나머지의 경우
get요청 금지
-> "get요청의 주도권을 라이브러리에 넘김"

useQQuery호출시 변환되는 것
1. data - get요청결과
2. isLoading - 로딩상태(요청만 가고 응답이 안온 상태)
3. isError - 에러상태

2. useMutation(get요청 이외의 요청용 hook)
- onSuccess를 정의해서 성공시 작업을 정의
- onError를 정의해서 실패시 작업을 정의
useMutation의 호출시 반환되는 것
mutate -> 함수
- mutate() 호출시 실행