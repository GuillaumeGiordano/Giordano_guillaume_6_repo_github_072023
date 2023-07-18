// STYLE CSS
import '../../styles/page1.css'
// Système
import {Outlet, Link, useParams  } from 'react-router-dom';

export default function Page1() {
  
  const { questionNumber } = useParams()

    return (
      <main className="">
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
      </main>
    );
}