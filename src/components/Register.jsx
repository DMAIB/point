import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h1>Register</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
        
        <input {...register("firstName", { required: true })} placeholder="First Name" />
        {errors.firstName && <span className="error-message">Name is required</span>}
        
        <input {...register("lastName", { required: true })} placeholder="Last Name" />
        {errors.lastName && <span className="error-message">Name is required</span>}
        
        <input {...register("middleName", { required: true })} placeholder="Middle Name" />
        {errors.middleName && <span className="error-message">Name is required</span>}
        
        <input {...register("phone", { required: true })} placeholder="Phone" />
        {errors.phone && <span className="error-message">Phone is required</span>}
        
        <input {...register("email", { required: true })} placeholder="Email" />
        {errors.email && <span className="error-message">Email is required</span>}
        
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && <span className="error-message">Password is required</span>}
        
        <button type="submit">Registration</button>
      </form>
      <img src={require('./Ellipse.png')} alt="Overlay" className="overlay-image" />
      <img src={require('./833.png')} alt="Second Overlay" className="second-overlay-image" />
      <div className="image-container">
        <img src={require('./photo1.png')} alt="Registration" />
      </div>
    </div>
  );
};

export default Register;
