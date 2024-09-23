import LoginButton from "@/components/LoginButton";
import logoad from "@/assets/email.png";
const Login = () => {
  return (
    <div className="w-[350px] h-full flex flex-col justify-center bg-slate-500">
      <div className="text-center my-5  ">
        <h1>로고</h1>
        <h1>안녕 칭구들~ 행복하자</h1>
        <h2>뭐가 됐든 행복하면 됐지</h2>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center ">
        <LoginButton
          name="카카오"
          logo="/images/kakao.png"
          color="#fde500"
          textColor="#000000"
        />
        <LoginButton
          name="구글"
          logo="/images/google.png"
          color="#FFFFFF"
          textColor="#000000"
        />
        <LoginButton
          name="이메일"
          logo="/images/email.png"
          color="#5667ff"
          textColor="#FFFFFF"
        />
        <h3 className="text-center ">이메일로 회원가입</h3>
      </div>
    </div>
  );
};

export default Login;
