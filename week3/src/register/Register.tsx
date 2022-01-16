import React, { FormEvent } from 'react';
import './_register-page.css';
import Vespa from '../core/ui/assets/MotorCycle.png';
import Input from '../components/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import userActionsApi from '../api/userActionsApi';
import useFormito from '../core/util/hook/formito/useFormito';
import { User, UserAuthPayload } from '../api/userActionModels';

const initialLoginFormState = { email: '', password: '' };

function Register() {
    const navigate = useNavigate();
    const { formitoState, dispatchFormitoAction } = useFormito(initialLoginFormState);
    return (
        <div className="page__container">
            <div className="child__left">
                <img className="child__left-bg" src={Vespa} alt="Vespa" />
                <div className="form__container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="form__logo">Pazarama</h1>
                        <h2 className="form__h2">Register</h2>
                        <label className="form__label" htmlFor="Email">
                            Email
                        </label>
                        <Input
                            className="form__input"
                            value={formitoState.email}
                            onChange={handleTextFieldChange}
                            type="email"
                            name="email"
                            placeholder="username@gmail.com"
                        />
                        <label className="form__label" htmlFor="Password">
                            Password
                        </label>
                        <Input
                            className="form__input input--type--password"
                            value={formitoState.password}
                            onChange={handleTextFieldChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <div className="bottom-content">
                            Already Got an Account?
                            <Link className="forgot-password__btn" to="/login">
                                Sign In
                            </Link>
                            <Button size="medium" buttonType="secondary" type="submit">
                                Sign Up
                            </Button>
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
        try {
            event.preventDefault();
            event.stopPropagation();
            const users = await userActionsApi.getUsers();
            const user = users.find((user) => user.email === formitoState.email);
            if (!user && formitoState.email !== '' && formitoState.password !== '') {
                await userActionsApi.signUp({
                    email: formitoState.email,
                    password: formitoState.password,
                });
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default Register;
