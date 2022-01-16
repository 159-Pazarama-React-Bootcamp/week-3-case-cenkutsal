import React, { FormEvent, useEffect } from 'react';
import './_login-page.css';
import Vespa from '../core/ui/assets/MotorCycle.png';
import Input from '../components/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import useFormito from '../core/util/hook/formito/useFormito';
import useAsyncProcess from '../core/network/async-process/useAsyncProcess';
import userActionsApi from '../api/userActionsApi';

const initialLoginFormState = { email: '', password: '' };

function Login() {
    const navigate = useNavigate();
    const { formitoState, dispatchFormitoAction } = useFormito(initialLoginFormState);
    const { state, runAsyncProcess } = useAsyncProcess();

    return (
        <div className="page__container">
            <div className="child__left">
                <img className="child__left-bg" src={Vespa} alt="Vespa" />
                <div className="card">
                    <form className="form__container" onSubmit={handleSubmit}>
                        <h1 className="form__logo">Pazarama</h1>
                        <h2 className="form__h2">Login</h2>
                        <label className="form__label" htmlFor="email">
                            Email
                        </label>
                        <Input
                            className="form__input"
                            name="email"
                            value={formitoState.email}
                            onChange={handleTextFieldChange}
                            placeholder="username@gmail.com"
                            type="email"
                        />
                        <label className="form__label" htmlFor="password">
                            Password
                        </label>
                        <Input
                            className="form__input input--type--password"
                            value={formitoState.password}
                            onChange={handleTextFieldChange}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <div className="bottom-content">
                            <Link className="forgot-password__btn" to="/passwordrecovery">
                                Forgot Password?
                            </Link>

                            <Button size="medium" buttonType="secondary" type="submit">
                                Sign In
                            </Button>
                        </div>
                        <div className="card-footer__container">
                            <p className="card-footer__container-text">Don&apos;t have an account yet?</p>
                            <Link className="card-footer__register-btn" to="/register">
                                Register for Free
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="motorcyle-bg__container">
                    <img src={Vespa} alt="Vespa" />
                </div>
            </div>
            <div className="child__right"></div>
        </div>
    );
    function handleTextFieldChange({ currentTarget: { value, name } }: React.SyntheticEvent<HTMLInputElement>) {
        dispatchFormitoAction({
            type: 'SET_FORM_VALUE',
            payload: {
                [name]: value,
            },
        });
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();
        try {
            const users = await userActionsApi.getUsers();
            const user = users.find(
                (user) => user.email === formitoState.email && user.password === formitoState.password,
            );
            if (user) {
                localStorage.setItem('userID', user.userID);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default Login;
