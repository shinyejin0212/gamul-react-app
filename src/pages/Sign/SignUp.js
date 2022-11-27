import React from 'react';
import { useForm } from 'react-hook-form';
import { Title } from '../../styles/styles';
import SubmitButton from '../../components/Button/SubmitButton.js';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

export default function SignUp() {
  const PasswordPattern =
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/;
  const schema = yup
    .object()
    .shape({
      nickname: yup.string().required('이름을 입력해주세요 😰').min(2, '2자 이상 입력해주세요 😰'),
      email: yup
        .string()
        .required('이메일을 입력해주세요 😰')
        .email('올바른 이메일 형식을 입력해주세요 😰'),
      password: yup.string().required('비밀번호를 입력해주세요 😰').matches(
        PasswordPattern, //영문+숫자 혹은 영문+특수문자
        '8자 이상 영문, 숫자, 특수문자 중 가지 이상을 조합해야 합니다.'
      ),

      checkpassword: yup
        .string()
        .required('비밀번호를 확인하세요 😰')
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다 😰'),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      checkpassword: '',
    },
  });

  const onValid = async (data) => {
    // alert(JSON.stringify(data));/
    console.log(data, 'onvalid');

    try {
      await axios.post(`/auth/signup`, {
        name: data.nickname,
        email: data.email,
        password: data.password,
      });
      window.location.href = '/';
    } catch (e) {
      console.log(e);
    }
  };
  const onInvalid = (data) => console.log(data, 'onInvalid');

  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // minHeight: "100vh",
      }}
    >
      <div>
        <Title>회원가입</Title>
        <div style={explain}>간단한 회원가입을 통해 GAMUL을 이용해보세요.</div>
        <br></br>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div style={wrapInput}>
            <div style={secondtitle}>
              닉네임
              <a href="#!" style={validation}>
                {errors.nickname?.message}
              </a>
            </div>
            <InputBlank
              placeholder="닉네임을 입력해주세요"
              {...register('nickname', { required: true })}
            />
          </div>
          <div style={wrapInput}>
            <div style={secondtitle}>
              이메일
              <a href="#!" style={validation}>
                {errors.email?.message}
              </a>
            </div>
            <InputBlank
              placeholder="이메일을 입력해주세요"
              {...register('email', { required: true })}
            />
          </div>
          <div style={wrapInput}>
            <div style={secondtitle}>
              비밀번호
              <a href="#!" style={validation}>
                {errors.password?.message}
              </a>
            </div>

            <InputBlank
              type="password"
              placeholder="비밀번호를 입력해주세요 (영어+숫자 or 특수문자 8자 이상)"
              {...register('password', { required: true })}
            />
          </div>
          <div style={wrapInput}>
            <div style={secondtitle}>
              비밀번호 확인
              <a href="#!" style={validation}>
                {errors.checkpassword?.message}
              </a>
            </div>
            <InputBlank
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              {...register('checkpassword', { required: true })}
            />
          </div>
          <SubmitButton title="가입 완료하기" />
        </form>
        <br></br>
        <div
          style={{
            fontSize: '12px',
          }}
        >
          이미 계정이 있으신가요?
        </div>
        <Link
          to="/login"
          style={{
            marginLeft: '5px',
            color: 'black',
            fontWeight: '600',
            fontSize: '12px',
          }}
        >
          로그인하기
        </Link>
      </div>
    </div>
  );
}

const InputBlank = styled.input`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 354px;
  height: 40px;
  border-radius: 12px;
  border-style: solid;
  border-color: #dadada;
  padding: 10px;
  ::placeholder {
    color: #dadada;
  }
`;

const wrapInput = {
  paddingBottom: '0.5vh',
  display: 'flex',
  flexDirection: 'column',
};

const explain = {
  fontWeight: '500',
  fontSize: '12px',
  padding: '10px',
  marginBottom: '15px',
};

const secondtitle = {
  fontWeight: '500',
  fontSize: '15px',
  textAlign: 'left',
  margin: 'auto',
  width: '80vw',
  maxWidth: '354px',
};

const validation = {
  color: 'red',
  fontSize: '12px',
  float: 'right',
  textDecoration: 'none',
  whiteSpace: 'normal',
};
