import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Groupe Darnier</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Expert en rénovation énergétique pour collectivités, syndics, mairies et bâtiments tertiaires.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">Nos services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Audit énergétique</h3>
            <p>Réalisation d'audits complets pour identifier les leviers d'économie d'énergie dans vos bâtiments.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Travaux de rénovation</h3>
            <p>Coordination et exécution des travaux (isolation, chauffage, ventilation).</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Accompagnement aux aides</h3>
            <p>Aide à l'obtention de subventions (CEE, MaPrimeRénov', etc.).</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">À propos du Groupe Darnier</h2>
        <p className="text-lg">Le Groupe Darnier accompagne les gestionnaires de bâtiments publics dans leur transition énergétique avec des solutions techniques, économiques et durables.</p>
      </section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contactez-nous</h2>
          <form className="space-y-4 text-left">
            <div>
              <label className="block mb-1">Nom</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea className="w-full border rounded px-4 py-2" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded">Envoyer</button>
          </form>
        </div>
      </section>
      <section className="py-10 px-6 text-center text-sm text-gray-600">
        <p>© Groupe Darnier - Tous droits réservés.</p>
      </section>
    </div>
  );
}

export default App;
