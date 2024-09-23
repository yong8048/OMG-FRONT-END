"use client";
import React from "react";

const LoginButton = ({
  name,
  logo,
  color,
  textColor,
}: {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}) => {
  const clickLogin = () => {
    switch (name) {
      case "카카오":
        alert("카카오");
        break;
      case "구글":
        alert("구글");
        break;
      case "이메일":
        alert("이메일");
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex justify-center">
      <button
        className="flex items-center justify-center py-3 w-[90%] gap-2 rounded-lg drop-shadow-lg"
        style={{ backgroundColor: color, color: textColor }}
        onClick={clickLogin}
      >
        <img src={logo} alt="logo" />
        <p className="mt-[2px]">{name}로 로그인</p>
      </button>
    </div>
  );
};

export default LoginButton;
