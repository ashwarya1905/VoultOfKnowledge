import React from "react";
import "./NavBar.css";
import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import Manage from "../pages/Manage.jsx";
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const BookIcon = () => <Book size={28} color="#4b527e" />;

export default function NavBar() {
    return (
        <nav>
            <div id="LogoSection">
                <h2>The Voult Of Knowledge</h2>
                <BookIcon />
            </div>
             
             <div id="LinkSection">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    <li>
                        <Link to="/manage">Manage</Link>
                    </li>
                </ul>
             </div>
          
        </nav>
    );
}
