import React from 'react';
import {mailContact} from "../config";

export class Home extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">

          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5">
            <form action={"https://formspree.io/" + mailContact} method="POST">
              <div className="form-group">
                <label>Vorname ( Pflichtfeld)</label>
                <input type="text" className="form-control" name="first_name" />
              </div>

              <div className="form-group">
                <label>Name ( Pflichtfeld)</label>
                <input type="text" className="form-control" name="last_name" />
              </div>

              <div className="form-group">
                <label>Geburtsdatum</label>
                <input type="date" className="form-control" name="date_of_birth" />
              </div>

              <div className="form-group">
                <label>E-Mail Adresse ( Pflichtfeld)</label>
                <input type="email" className="form-control" name="email" />
              </div>

              <div className="form-group">
                <label>Handynummer (optional)</label>
                <input type="text" className="form-control" name="phone" />
              </div>

              <div className="form-group">
                <label>Beschreiben Sie Ihr Zahnproblem (Pflichtfeld)</label>
                <textarea className="form-control" name="description" />
              </div>

              <input type="submit" value="Submit" className="btn btn-primary"/>

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
