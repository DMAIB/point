import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === data.username && user.password === data.password) {
            alert('Авторизация успешна!');
            navigate('/');
        } else {
            alert('Неверный логин или пароль');
        }
    };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h1>Auth</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
        <input {...register("email", { required: true })} placeholder="Email" />
        {errors.email && <span>Email is required</span>}
        
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && <span>Password is required</span>}
        
        <button type="submit">Login</button>
      </form>

      {/* Первое изображение наложение */}
      <img src={require('./Ellipse.png')} alt="Overlay" className="overlay-image" />
      
      {/* Второе изображение наложение */}
      <img src={require('./833.png')} alt="Second Overlay" className="second-overlay-image" />
      
      {/* Контейнер для основного изображения */}
      <div className="image-container">
        <img src={require('./photo1.png')} alt="Registration" />
      </div>
    </div>
  );
};

export default Login;