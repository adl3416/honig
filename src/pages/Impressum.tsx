import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="mb-8">
            <p className="mb-2"><strong>Velberter Honig</strong></p>
            <p className="mb-2">Max Mustermann</p>
            <p className="mb-2">Musterstraße 123</p>
            <p className="mb-2">42551 Velbert</p>
            <p className="mb-2">Deutschland</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <div className="mb-8">
            <p className="mb-2"><strong>Telefon:</strong> +49 (0) 2051 123456</p>
            <p className="mb-2"><strong>E-Mail:</strong> info@velberterhonig.de</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
          <div className="mb-8">
            <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE123456789</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="mb-8">
            <p className="mb-2">Max Mustermann</p>
            <p className="mb-2">Musterstraße 123</p>
            <p className="mb-2">42551 Velbert</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
          <div className="mb-8">
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-honey-600 hover:text-honey-700 ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <div className="mb-8">
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
          <div className="mb-8">
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
              wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
              die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
              den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
              umgehend entfernen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
          <div className="mb-8">
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
          <div className="mb-8">
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
              Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte 
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
              aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
