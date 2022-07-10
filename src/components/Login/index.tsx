import {
  Root,
  Container,
  Logo,
  Form,
  InputBox,
  SignUp,
  Typography,
} from './styles';
import Input from '../Input';

export default function Login() {
  return (
    <Root>
      <Container>
        <Form>
          <Logo>BookDart</Logo>
          <InputBox>
            <Typography>로그인</Typography>
            <Input label="이메일" />
            <Input type="password" label="비밀번호" />
          </InputBox>
          <SignUp>회원가입</SignUp>
        </Form>
      </Container>
    </Root>
  );
}