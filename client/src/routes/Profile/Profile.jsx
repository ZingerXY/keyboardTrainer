import React, { useState} from 'react';
import Style from "./Profile.module.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
    const [isChange, setIsChange] = useState(false);

    const switchIsChange = (e) => {
        setIsChange(!isChange);
    }

    return (
        <div className={`${Style["profile-page"]}`}>
            <div className={`container`}>
                <h2 className={`${Style["profile-title"]}`}>Профиль</h2>

                <div className={`${Style["profile-box"]}`}>
                    <div className={`${Style["profile-avatar_box"]}`}>
                        <img className={`${Style["profile-avatar_img"]}`} src="./img/avatar_default.png" />
                        <button className={`${Style["profile-avatar_box-download_button"]}`}>
                            <i className={`fa-solid fa-arrow-up-from-bracket ${Style["fa-arrow-up-from-bracket"]}`}></i>
                            Загрузить
                        </button>
                    </div>
                    <div className={`${Style["profile-form_box"]}`}>
                        {!isChange ? (
                            <>
                                <div className={`${Style["profile-user_info_box"]}`}>
                                    <div className={`${Style["profile-user_info"]}`}>
                                        <p className={`${Style["profile-label"]}`}>Имя:</p>
                                        <p className={`${Style["profile-data"]}`}>Петр</p>
                                    </div>
                                    <div className={`${Style["profile-user_info"]}`}>
                                        <p className={`${Style["profile-label"]}`}>Email:</p>
                                        <p className={`${Style["profile-data"]}`}>test@email.com</p>
                                    </div>
                                    <div className={`${Style["profile-user_info"]}`}>
                                        <p className={`${Style["profile-label"]}`}>Пароль:</p>
                                        <p className={`${Style["profile-data"]}`}>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                            <i className={`fa fa-solid fa-circle fa-xs ${Style["fa-circle"]}`}></i>
                                        </p>
                                    </div>
                                </div>

                                <button className={`${Style["profile-user_info_btn"]} btn`} onClick={switchIsChange}>
                                    Редактировать
                                </button>
                            </>
                        ) : (
                            <div>
                                <form action="#" id="profile-form" className={`${Style["profile-form"]}`}>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Имя:</p>
                                        <input type="text" name="name" className={`${Style["profile-user_info-input"]}`}/>
                                    </label>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Email:</p>
                                        <input type="email" name="email" className={`${Style["profile-user_info-input"]}`} />
                                    </label>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Пароль:</p>
                                        <input type="password" name="password" className={`${Style["profile-user_info-input"]}`} />
                                    </label>

                                    <div className={`${Style["profile-form_btn-group"]}`}>
                                        <button onClick={switchIsChange} type="submit" className={`${Style["profile-form_btn"]} btn`}>
                                            Сохранить
                                        </button>
                                        <button onClick={switchIsChange} className={`${Style["profile-form_btn"]} btn ${Style["btn-default"]}`}>
                                            Отмена
                                        </button>
                                    </div>
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