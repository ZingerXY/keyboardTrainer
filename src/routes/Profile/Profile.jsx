import React, { useEffect, useState} from 'react';
import Style from "./Profile.module.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
    const requestUrl = 'https://kangaroo.zingery.ru/api';

    const [userId, setUserId] = useState(1); // далее будет корректный Id текущего пользователя
    const [userUsername, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [isChange, setIsChange] = useState(false);

    const [image, setImage] = useState('./img/avatar_default.png');
    const [altImage, setAltImage] = useState((new Date()).getTime());

    const showAvatar = async () => {
        await fetch(`${requestUrl}/showAvatar?user_id=${userId}`, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((data) => {
                setImage(data.original);
            })
            .catch(() => {
                setImage('./img/avatar_default.png');
            });
    }

    const getCurrentUserData =  () => {
        fetch(`${requestUrl}/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUserId(data.data.id);
                setUsername(data.data.username);
                setEmail(data.data.email);
                setOldPassword('');
                setNewPassword('');
            })
    }

    useEffect(() => {
        showAvatar();
        getCurrentUserData();
    }, []);

    const switchIsChange = (e) => {
        setOldPassword('');
        setNewPassword('');
        setIsChange(!isChange);
    }

    const handleFileChange = async (e) => {
        if (!e.target.files && !e.target.files[0]) {
            return;
        }

        let formData = new FormData();
        formData.append("user_id", 1);
        formData.append("image", e.target.files[0]);

       await fetch(`${requestUrl}/saveAvatar`, {
            method: 'POST',
            body: formData
        }).then((data) => {
            showAvatar();
        })
        .catch((data) => console.log('error'));
    };

    const handleUserUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleUserEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleOldPasswordChange = (event) => {
        removeErrors();
        setOldPassword(event.target.value);
    }

    const handleNewPasswordChange = (event) => {
        removeErrors();
        setNewPassword(event.target.value);
    }

    const addError = (elem, errorMsg) => {
        removeErrors();
        
        let elemError = document.createElement('p');
        elemError.textContent = errorMsg;
        elemError.id = 'error-msg';
        elemError.className = `${Style["error-input"]}`;

        elem.after(elemError);
    }

    const removeErrors = () => {
        let profileForm = document.forms.profile;
        let errorBlocks = profileForm.querySelectorAll('#error-msg');

        if (errorBlocks) {
            errorBlocks.forEach(element => element.remove());
        }
    }

    const handleFormChange = (e) => {
        e.preventDefault();
        let profileForm = document.forms.profile;
        let profileFormElements = profileForm.elements;

        if (profileFormElements.newPassword.value) {
            if (profileFormElements.oldPassword.value) {
                // здесь должен быть запрос в бэк на провреку совпадения hash
                // пока будет заглушка на то, что они не совпали
                addError(
                    profileFormElements.oldPassword,
                    "не верный старый пароль"
                );

                return;
            } else {
                addError(
                    profileFormElements.oldPassword,
                    "для смены пароля введите старый"
                );

                return;
            }
        }

        switchIsChange();
    }

    const handleFormChangeCancel = (e) => {
        e.preventDefault();
        getCurrentUserData();

        switchIsChange();
    }

    return (
        <div className={`${Style["profile-page"]}`}>
            <div className={`container`}>
                <h2 className={`${Style["profile-title"]}`}>Профиль</h2>

                <div className={`${Style["profile-box"]}`}>
                    <div className={`${Style["profile-avatar_box"]}`}>
                        <img
                            className={`${Style["profile-avatar_img"]}`}
                            alt={altImage}
                            src={image}
                        />
                        <input
                            id="input__file"
                            className={`${Style["profile-avatar_input"]}`}
                            type="file"
                            accept=".png"
                            onChange={handleFileChange}
                        />
                        <label for="input__file" className={`${Style["profile-avatar_box-download_button"]}`}>
                            <i className={`fa-solid fa-arrow-up-from-bracket ${Style["fa-arrow-up-from-bracket"]}`}></i>
                            <span>Загрузить</span>
                        </label>

                    </div>
                    <div className={`${Style["profile-form_box"]}`}>
                        {!isChange ? (
                            <>
                                <div className={`${Style["profile-user_info_box"]}`}>
                                    <div className={`${Style["profile-user_info"]}`}>
                                        <p className={`${Style["profile-label"]}`}>Имя:</p>
                                        <p className={`${Style["profile-data"]}`}>{userUsername}</p>
                                    </div>
                                    <div className={`${Style["profile-user_info"]}`}>
                                        <p className={`${Style["profile-label"]}`}>Email:</p>
                                        <p className={`${Style["profile-data"]}`}>{userEmail}</p>
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
                                <form action="#" id="profile-form" name="profile" className={`${Style["profile-form"]}`}>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Имя:</p>
                                        <input
                                            type="text"
                                            name="username"
                                            value={userUsername}
                                            onChange={handleUserUsernameChange}
                                            className={`${Style["profile-user_info-input"]}`}
                                        />
                                    </label>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Email:</p>
                                        <input
                                            type="email"
                                            name="email"
                                            value={userEmail}
                                            onChange={handleUserEmailChange}
                                            className={`${Style["profile-user_info-input"]}`}
                                        />
                                    </label>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Старый пароль:</p>
                                        <input
                                            type="password"
                                            name="oldPassword"
                                            value={oldPassword}
                                            onChange={handleOldPasswordChange}
                                            className={`${Style["profile-user_info-input"]}`}
                                        />
                                    </label>
                                    <label className={`${Style["profile-label"]}`}>
                                        <p>Новый пароль:</p>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                            className={`${Style["profile-user_info-input"]}`}
                                        />
                                    </label>

                                    <div className={`${Style["profile-form_btn-group"]}`}>
                                        <button onClick={handleFormChange} type="submit" className={`${Style["profile-form_btn"]} btn`}>
                                            Сохранить
                                        </button>
                                        <button onClick={handleFormChangeCancel} className={`${Style["profile-form_btn"]} btn ${Style["btn-default"]}`}>
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