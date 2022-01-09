import React from 'react';
import './_landing-page.css';
import frame from '../core/ui/assets/Frame.png';
import vector from '../core/ui/assets/Vector.svg';
import Button from '../components/button/Button';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="landing-page__container">
            <div className="child__left">
                <div className="paragraphs__container">
                    <h2 className="child__left-h2">Hello 👋</h2>
                    <p>
                        I hope everyone is safe and sound. I designed different type of lending pages,application. it
                        can help others to develop more ideas from this. I keep it simple and minimal. It can also help
                        you find different options in exploring and improving your skills.
                    </p>
                    <p>I am available for new projects. I hope you show me your support 😄</p>

                    <p>
                        I wish you luck,
                        <br />
                        Drax❤️
                    </p>
                </div>
                <img className="vector" src={vector} alt="Vector" />
                <Button buttonType="primary" size="large" onClick={handleClick}>
                    Buy me a Coffee
                </Button>
            </div>
            <div className="child__right">
                <img src={frame} alt="Frame" />
            </div>
        </div>
    );
    function handleClick() {
        navigate('/login');
    }
}

export default Landing;
