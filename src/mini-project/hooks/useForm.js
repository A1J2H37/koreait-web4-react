import { useState } from "react"

// 커스텀 훅 - 공용
export const useForm = (initVal) => {
  const [formVal, setFormVal] = useState(initVal);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormVal((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const resetForm = () => {
      setFormVal(initVal);
    }
  return {
      formVal,
      handleChange,
      resetForm
    }
}