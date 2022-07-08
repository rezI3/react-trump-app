import React from "react";
import { useRef } from "react";
import {auth} from "../firebase"
import { Link } from "react-router-dom";

const SignUp = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value)
    // ユーザ新規登録
    auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)

  };

  return (
    <>
      <h1>新規登録</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="メールアドレス" ref={emailRef} />
        <br/>
        <input type="password" placeholder="パスワード" ref={passwordRef}/>
        <br/>
        <input type="submit"/>
      </form>

      <div>
        ログインは<Link to="/signin">ここ</Link>をクリック
      </div>
    </>
  );
};

export default SignUp;
