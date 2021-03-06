import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      alertEmail: true,
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(e.target.value);
  };

  checkEmail = () => {
    this.setState({
      alertEmail: this.state.email.includes("@" && ".com") ? true : false,
    });
  };
  render() {
    return (
      <div className="Login">
        <main>
          <h1>로그인</h1>
          <div className="loginContainer">
            <div className="socialLoginBox">
              <a href="#">네이버로 로그인</a>
              <a href="#" className="kakao">
                카카오로 로그인
              </a>
            </div>
            <div className="or">
              <span className="line"></span>
              <span className="orText">또는</span>
              <span className="line"></span>
            </div>
            <section>
              <div className="inputBox">
                <input
                  placeholder="이메일"
                  onChange={this.handleEmail}
                  onKeyUp={this.checkEmail}
                />
                <div
                  className={this.state.alertEmail ? "hiddenAlert" : "alert"}
                >
                  이메일 형식이 유효하지 않습니다.
                </div>
                <input
                  className="password"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="buttonBox">
                <div className="memory">
                  <input type="checkbox" id="a1" name="로그인기억" />
                  <label for="a1"> </label>
                  <span>로그인 기억하기</span>
                </div>
                <a>비밀번호 찾기</a>
              </div>
              <Link to="/main">
                <button>이메일로 로그인</button>
              </Link>
              <p>
                아직 스페이스클라우드 회원이 아니신가요?
                <Link to="/signUp">
                  <a href="#">회원가입</a>
                </Link>
              </p>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
