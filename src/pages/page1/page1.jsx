// STYLE CSS
import './page1.css'
// Système
import {Outlet, Link  } from 'react-router-dom';

export default function Page1() {
  
    return (
      <main className="">
      <h2>Questionnaire 🧮</h2>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
      </main>
    );
}