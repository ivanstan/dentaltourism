import React from 'react';
import {mailContact} from "../config";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const header = {
  background: '#5FC8D7',
  minHeight: 300,
  marginBottom: 20,
};

const anchor = {
  marginTop: 30,
  width: 100,
};

export class Home extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div style={header}>
        <h1 className="text-white text-center" style={{paddingTop: 120}}>Dentaltourismus</h1>
        <AnchorLink href="#anfrage" className="btn bg-white d-block mx-auto" style={anchor}>Anfrage</AnchorLink>
      </div>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center my-5">Über mich</h2>
            <p>Ich heiße Antonio Milivoevski und bin als Zahnarzt in einer deutschen Zahnarztpraxis tätig.<br/>
              Mein Studium der Zahnmedizin habe ich 2013 in Belgrad, Serbien abgeschlossen.<br/>
              Seit 2017 bin ich als Zahnarzt in Deutschland angestellt. Tägliche Beschäftigung mit Patienten in
              Deutschland hat mir die Idee über dental Tourismus gebracht. Jeder Mensch verdient eine vernünftige
              Zahnbehandlung. Leider oft die Preise in Deutschland erlauben es nicht.
              Als jemand der in Serbien Zahnmedizin studiert hat und auch dort 2 Jahre als Zahnarzt gearbeitet hat
              dürfte ich mir erlauben die Qualität der Zahnbehandlung in Serbien mit der deutschen zu vergleichen.
              Niedrigere kosten für zahnärztliche Behandlung bedeuten nicht immer weniger Qualität. Das kann ich auch in
              diesem Fall behaupten. In manchen Zahnarztpraxen arbeiten die Professoren von den Universitäten und in
              fast allen sind Fachärzte für Prothetik oder Kieferchirurgie tätig.
              Viele fragen sich warum ist im Ausland bzw. Serbien Zahnersatz drastisch billiger als in Deutschland? Es
              ist einfach zu erklären. Lebensstandard, Steuer, Zahntechnischekosten sind niedriger, die Qualität, die
              Verantwortung, Fähigkeit und Fachwissen im Gegenteil nicht.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5">
            <h2 className="text-center my-5" id="anfrage">Anfrage</h2>
            <form action={"https://formspree.io/" + mailContact} method="POST">
              <div className="form-group">
                <label>Vorname ( Pflichtfeld)</label>
                <input type="text" className="form-control" name="first_name"/>
              </div>

              <div className="form-group">
                <label>Name ( Pflichtfeld)</label>
                <input type="text" className="form-control" name="last_name"/>
              </div>

              <div className="form-group">
                <label>Geburtsdatum</label>
                <input type="date" className="form-control" name="date_of_birth"/>
              </div>

              <div className="form-group">
                <label>E-Mail Adresse ( Pflichtfeld)</label>
                <input type="email" className="form-control" name="email"/>
              </div>

              <div className="form-group">
                <label>Handynummer (optional)</label>
                <input type="text" className="form-control" name="phone"/>
              </div>

              <div className="form-group">
                <label>Beschreiben Sie Ihr Zahnproblem (Pflichtfeld)</label>
                <textarea className="form-control" name="description"/>
              </div>

              <input type="submit" value="Submit" className="btn btn-primary text-white d-block mx-auto"
                     style={{width: 100}}/>

              {/*Ihr Rö Bild ( Panorama Bild-OPG) (Pflichtfeld)*/}
              {/*Fotos von Ihren Zähnen (optional)*/}
              {/*Vorhandene Therapieplan ( falls vorhanden)*/}
              {/*Gewünschte Datum Ihres Therapiebeginns*/}
              {/*Möchten Sie einen Kostenvoranschlag für Ihre Aufenthalt im Serbien während der Behandlung ( Falls ja, wie viel Personen sollen wir buchen, liegen besondere wünsche für das Hotel, bitte beschreiben )*/}

            </form>
          </div>
        </div>
      </div>
    </div>;
  }
}
