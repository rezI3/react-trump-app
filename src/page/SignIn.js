import React,{useRef} from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value)
    // ログイン
    auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)

  };

  return (
    <>
      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="メールアドレス" ref={emailRef} />
        <br/>
        <input type="password" placeholder="パスワード" ref={passwordRef}/>
        <br/>
        <input type="submit"/>
      </form>

      <div>
        ユーザ登録は<Link to="/signup">ここ</Link>をクリック
      </div>
    </>
  );
}

export default SignIn