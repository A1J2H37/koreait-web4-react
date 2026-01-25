import { create } from "zustand";

export const useSurveyStore = create(() => {
  return {
    serveyData: {
      // step 1
      name: "",
      age: "",
      gender: "",

      // step2
      satisfaction: "",
      recommend: "",
      email: ""
    },

    // zustand가 제공해주는 set함수도 이전상태 기억
    // -> 함수형 업데이트 제공
    setSurveyInfo: (objData) => set((prev) => {
      // js객체는 key중복시 이후값이 이전값 덮어씌움
      return {
        ...prev,
        surveyData: {...prev.surveyData, ...objData}
      }
    }),
    // 이메일만 업데이트
    setEmail: (email) => set((prev) => {
      return {
        ...prev,
        surveyData: {...prev.surveyData, ...email}
      }
    })

  }
})