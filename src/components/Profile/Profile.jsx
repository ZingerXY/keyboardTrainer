import React, { useState} from 'react';
import './Profile.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
    const [isChange, setIsChange] = useState(false);

    const switchIsChange = (e) => {
        setIsChange(!isChange);
    }

    return (
        <div className="profile-page">
            <div className="container">
                <h2 className="profile-title">Профиль</h2>

                <div className="profile-box">
                    <div className="profile-avatar_box">
                        <img className="profile-avatar_img" src="./img/avatar_default.png" />
                        <button className="profile-avatar_box-download_button">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            Загрузить
                        </button>
                    </div>
                    <div className="profile-form_box">
                        {!isChange ? (
                            <>
                                <div className="profile-user_info_box">
                                    <div className="profile-user_info">
                                        <p className="profile-label">Имя:</p>
                                        <p className="profile-data">Петр</p>
                                    </div>
                                    <div className="profile-user_info">
                                        <p className="profile-label">Email:</p>
                                        <p className="profile-data">test@email.com</p>
                                    </div>
                                    <div className="profile-user_info">
                                        <p className="profile-label">Пароль:</p>
                                        <p className="profile-data">
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                            <i className="fa fa-solid fa-circle fa-xs"></i>
                                        </p>
                                    </div>
                                </div>

                                <button className="profile-user_info_btn btn" onClick={switchIsChange}>
                                    Редактировать
                                </button>
                            </>
                        ) : (
                            <div>
                                <form action="#" id="profile-form" className="profile-form">
                                    <label className="profile-label">
                                        <p>Имя:</p>
                                        <input type="text" name="name" className="profile-user_info-input"/>
                                    </label>
                                    <label className="profile-label">
                                        <p>Email:</p>
                                        <input type="email" name="email" className="profile-user_info-input" />
                                    </label>
                                    <label className="profile-label">
                                        <p>Пароль:</p>
                                        <input type="password" name="password" className="profile-user_info-input" />
                                    </label>

                                    <button onClick={switchIsChange} type="submit" className="profile-form_btn btn">
                                        Сохранить
                                    </button>
                                    <button onClick={switchIsChange} className="profile-form_btn btn btn-default">
                                        Отмена
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;