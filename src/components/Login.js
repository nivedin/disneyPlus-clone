import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.75;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  width: 100%;
`;
const CTALogoTwo = styled.img`
  width: 100%;
  padding: 0 20px;
`;
const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0 16px;
  text-align: center;
  border-radius: 4px;
  color: #f9f9f9;
  font-size: 18px;
  cursor: pointer;
  margin: 20px 0;
  letter-spacing: 1.5px;
  transition: all 0.25s linear;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: #f9f9f9;
  font-weight: 500;
`;
