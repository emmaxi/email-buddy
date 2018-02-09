import React from 'react';

const Footer = () => {
    return (
    <footer className="page-footer teal">
        <div className="container">
            <div className="row">
                <div className="col l9 s12">
                    <h5 className="white-text">Developer Bio</h5>
                    <p className="grey-text text-lighten-4">Xi Wang. I'm a Full stack web developer working in CA, USA. Any suggestion and comment on this project is greatly appreciated. You can reach me at emmaxi0720@gmail.com</p>
                </div>
                <div className="col l1 s12"></div>
                <div className="col l2 s12">
                    <ul>
                        <li>
                            <a className="white-text" href="https://www.linkedin.com/in/xi-wang-34984786/">
                                <i class="fab fa-2x fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a className="white-text" href="https://github.com/emmaxi">
                                <i class="fab fa-2x fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a className="white-text" href="https://www.instagram.com/emmapudding/?hl=en">
                                <i class="fab fa-2x fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a className="white-text" href="https://www.facebook.com/profile.php?id=100009074500432">
                                <i class="fab fa-2x fa-facebook-square"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright black">
            <div className="container">
                <a className="brown-text text-lighten-3" href="#">Made by Xi Wang</a>
            </div>
        </div>
    </footer>
    );
};


export default Footer;

