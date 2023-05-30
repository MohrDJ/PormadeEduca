"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const schema = yup.object().shape({
  login: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório')
});

export default function FormularioLogin() {
  const [loginError, setLoginError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const onSubmit = (data) => {
    // Aqui você pode realizar a lógica de autenticação, como fazer uma requisição para um servidor
    // Se o login e senha forem válidos, redirecione o usuário para a próxima página
    // Caso contrário, mostre uma mensagem de erro

    if (data.login === 'admin' && data.password === 'admin') {
      // Autenticação bem-sucedida, redirecionar para a página de boas-vindas, por exemplo
      console.log('Login bem-sucedido');
    } else {
      setLoginError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" {...register("login")} />
          {errors?.login && <p>{errors.login.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password"  {...register("password")} />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
        {loginError && <p>{loginError}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
