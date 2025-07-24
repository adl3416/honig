import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
          <div className="mb-8">
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf unserer Website</h3>
          <div className="mb-8">
            <p className="mb-4"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <p className="mb-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit 
              des Seitenaufrufs).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
          <div className="mb-8">
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <div className="mb-8">
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-2">Velberter Honig</p>
            <p className="mb-2">Max Mustermann</p>
            <p className="mb-2">Musterstraße 123</p>
            <p className="mb-2">42551 Velbert</p>
            <p className="mb-2">Telefon: +49 (0) 2051 123456</p>
            <p className="mb-4">E-Mail: info@velberterhonig.de</p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
              Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Rechte</h3>
          <div className="mb-8">
            <p className="mb-4">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung oder Löschung dieser Daten zu verlangen</li>
              <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>der Datenverarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p>
              Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde über die 
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Datenerfassung auf unserer Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
          <div className="mb-8">
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in 
              so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
              Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
          <div className="mb-8">
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit 
              ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
              Sie können diese Einwilligung jederzeit widerrufen.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie 
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder 
              der Zweck für die Datenspeicherung entfällt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Plugins und Tools</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Fonts</h3>
          <div className="mb-8">
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte 
              Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt 
              Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten 
              korrekt anzuzeigen.
            </p>
            <p className="mb-4">
              Die Nutzung von Google Fonts erfolgt im Interesse einer einheitlichen und 
              ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes 
              Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter 
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-honey-600 hover:text-honey-700 ml-1">
                https://developers.google.com/fonts/faq
              </a> und in der Datenschutzerklärung von Google:
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-honey-600 hover:text-honey-700 ml-1">
                https://policies.google.com/privacy?hl=de
              </a>.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Stand der Datenschutzerklärung:</strong> {new Date().toLocaleDateString('de-DE')}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators erstellt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
