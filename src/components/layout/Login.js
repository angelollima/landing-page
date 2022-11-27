import Modal from 'react-modal';
import { useState } from "react";

import Form from './Form'

import { HiX } from 'react-icons/hi';

function Login() {

  const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

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
        backgroundColor: "rgba(255, 255, 255, 0.2)" 
    },
  };

    return (
        <section className="opc px-2 mb-8 lg:flex items-center lg:mb-0">
            <div className="bg-transparent_screen shadow-r_b_shadow border-l border-t border-transparent_border rounded-3xl p-5 lg:w-80">
                <h1 className="text-center font-Silkscreen font-bold text-light_text dark:text-white text-2xl mb-4">Login</h1>
                    {/*<form id="form" onsubmit="enter()">
                    <input type="text" id="user" placeholder="User" className="input border-l border-t border-input_border  capitalize" />
                    <div className="w-full relative">
                        <input type="password" id="password" placeholder="Password" className="input border-r border-b border-input_border" />
                    </div>
                    <button type="submit" className="btn shadow-enter_button">Log in</button>
                    <a href="www.google.com" className="flex justify-center text-blue_text dark:text-white">Forgot password?</a>
                    </form>*/}
                    <Form id="login" type={"submit"} text="Login">
                        <input type="text" id="user" placeholder="User" className="input border-l border-t border-input_border  capitalize" />
                        <input type="password" id="password" placeholder="Password" className="input border-r border-b border-input_border" />
                    </Form>
                    <a href="www.google.com" className="flex justify-center text-blue_text dark:text-white">Forgot password?</a>
                <button onClick={openModal} id="createAccount" className="btn shadow-create_button">Create new account</button>
                <Modal
                    isOpen={modal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                        <div className="w-[80vw] sm:w-[60vw] lg:w-[22vw] mx-auto">
                            <div className="flex justify-end">
                                <HiX onClick={closeModal} className="bg-blue-200 dark:bg-stone-400 rounded-lg p-2 cursor-pointer" size={40} />
                            </div>
                            <div>
                                {/*<form id="form_create_account">
                                    <input type="email" id="new_email" placeholder="Email" class="input border-l border-t border-input_border" />
                                    <input type="text" id="new_user" placeholder="User" class="input border-l border-t border-input_border capitalize" />
                                    <div class="w-full relative">
                                        <input type="password" id="new_password" placeholder="Password" class="input border border-input_border" />
                                    </div>
                                    <input type="date" id="new_date" placeholder="Number of contact" class="input border-r border-b border-input_border" />
                                    <input type="tel" id="new_mobile_number" placeholder="Mobile number" class="input border-r border-b border-input_border" />
                                    <button type="submit" class="btn shadow-create_button">Create account</button>
                                </form>*/}
                                <Form id="create" type={"submit"} text="Create account">
                                    <input type="email" id="new_email" placeholder="Email" class="input border-l border-t border-input_border" />
                                    <input type="text" id="new_user" placeholder="User" class="input border-l border-t border-input_border capitalize" />
                                    <input type="date" id="new_date" placeholder="Number of contact" class="input border-r border-b border-input_border" />
                                    <input type="tel" id="new_mobile_number" placeholder="Mobile number" class="input border-r border-b border-input_border" />
                                </Form>
                            </div>
                        </div>        
                </Modal>
            </div>
        </section>       
    )
}

export default Login
