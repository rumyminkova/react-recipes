import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col text-center py-5">
                        <a className="btn btn-instagram custom-social-button" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{'  '}
                        <a className="btn btn-facebook custom-social-button" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{'  '}
                        <a className="btn btn-twitter custom-social-button" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{'  '}
                        <a className="btn btn-google custom-social-button" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;