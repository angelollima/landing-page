import Modal from 'react-modal';
import { useState } from "react";

import Form from './Form'

import WindowSize from "../../provider/WindowSize"

import { HiX } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {

  const [modal, setModal] = useState(false)
  const [widthSize] = WindowSize();
  const [passwordShown, setPassword] = useState(false)

  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    overlay: {
        backgroundColor: widthSize < "1024" ? ("#C0C0C0") : ("rgba(255, 255, 255, 0.2)"),
    },
  };

    return (
        <section className="w-[90vw] md:w-[60vw] mx-auto mb-8 lg:w-auto lg:mx-0 lg:flex items-center lg:mb-0">
            <div className="bg-transparent_screen shadow-r_b_shadow border-l border-t border-transparent_border rounded-3xl p-5 lg:w-80">
                <h1 className="text-center font-Silkscreen font-bold text_color text-2xl mb-4">Login</h1>
                    <Form id="login" type={"submit"} text="Login">
                        <input type="text" id="user" placeholder="User" className="input border-l border-t border-input_border capitalize" />
                        <div>
                            <input type={passwordShown ? "text" : "password"} id="password" placeholder="Password" className="input border-r border-b border-input_border" />
                            {passwordShown === false? (
                                <i onClick={() => setPassword(!passwordShown)} className="cursor-pointer absolute mt-5 right-4 text_color"><AiOutlineEye/></i>
                                    ) : (
                                <i onClick={() => setPassword(!passwordShown)} className="cursor-pointer absolute mt-5 right-4 text_color"><AiOutlineEyeInvisible/></i>
                            )}
                        </div>
                    </Form>
                    <a href="www.google.com" className="flex justify-center text_color">Forgot password?</a>
                <button onClick={() => setModal(true)} id="createAccount" className="btn shadow-create_button">Create new account</button>
                <Modal
                    isOpen={modal}
                    onRequestClose={() => setModal(false)}
                    style={customStyles}
                >
                        <div className="w-[80vw] sm:w-[60vw] lg:w-[22vw] mx-auto">
                            <div className="flex justify-end">
                                <HiX onClick={() => setModal(false)} className="bg-blue-200 dark:bg-stone-400 rounded-lg p-2 cursor-pointer" size={40} />
                            </div>
                            <div>
                                <Form id="create" type={"submit"} text="Create account">
                                    <input type="email" id="new_email" placeholder="Email" className="input border-l border-t border-input_border" />
                                    <input type="text" id="new_user" placeholder="User" className="input border-l border-t border-input_border capitalize" />
                                    <div>
                                        <input type={passwordShown ? "text" : "password"} id="new_password" placeholder="Password" className="input border-r border-b border-input_border" />
                                        {passwordShown === false? (
                                            <i onClick={() => setPassword(!passwordShown)} className="cursor-pointer absolute mt-5 right-4 text_color"><AiOutlineEye/></i>
                                                ) : (
                                            <i onClick={() => setPassword(!passwordShown)} className="cursor-pointer absolute mt-5 right-4 text_color"><AiOutlineEyeInvisible/></i>
                                        )}
                                    </div>
                                    <input type="date" id="new_date" placeholder="Number of contact" className="input border-r border-b border-input_border" />
                                    <input type="tel" id="new_mobile_number" placeholder="Mobile number" className="input border-r border-b border-input_border" />
                                </Form>
                            </div>
                        </div>        
                </Modal>
            </div>
        </section>       
    )
}

export default Login
