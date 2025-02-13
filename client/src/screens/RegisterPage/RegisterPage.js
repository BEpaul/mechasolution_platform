import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    // 회원가입 성공
    navigate('/login')
  }

  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
      }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>이메일</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>이름</label>
        <input type="text" value={Name} onChange={onNameHandler}></input>

        <label>비밀번호</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>비밀번호 확인</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button type="submit">
          회원 가입
        </button>

      </form>
    </div>
  )
}

export default RegisterPage