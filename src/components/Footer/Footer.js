// IMPORTS
import React from 'react';
import "./Footer.css";
// PROPS: Footer
const Footer = props => (
    <table>
        <tbody>
            <tr>
                <td className="align-middle">
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-react fa-2x"></i>
                    </a>
                    <a href="https://github.com/jcrossguitar/19homework" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <div className="spacer"></div>
                    Jonathan Cross
                </td>
            </tr>
        </tbody>
    </table>
)
// EXPORT DEFAULT: Footer
export default Footer;