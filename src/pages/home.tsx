import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link, NavLink} from "react-router-dom";

const anchor = {
  marginTop: 30,
  width: 100,
};

const overlay = {
  position: 'relative' as 'relative',
  marginTop: -300,
  marginBottom: 100
};

export class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      firstCheckbox: false,
      secondCheckbox: false,
    };
  }

  onFirstCheckbox(e: any) {
    this.setState({
      firstCheckbox: !this.state.firstCheckbox
    });
  }

  onSecondCheckbox(e: any) {
    this.setState({
      secondCheckbox: !this.state.secondCheckbox
    });
  }

  public render() {
    return <div className="mb-5">
      <div>
        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} stopOnHover={false}>
          <div>
            <img src="/images/NEX_3306.jpg" width="23%"/>
          </div>
          <div>
            <img src="/images/NEX_5167.jpg" width="23%"/>
          </div>
          <div>
            <img src="/images/NEX_5172.jpg" width="23%"/>
          </div>
          <div>
            <img src="/images/NEX_5189.jpg" width="23%"/>
          </div>
          <div>
            <img src="/images/NEX_5212.jpg" width="23%"/>
          </div>
        </Carousel>
        <div style={overlay}>
          <h1 className="text-white text-center" style={{paddingTop: 120, fontWeight: 'bolder'}}>Balkan Dental Tourism</h1>
          <AnchorLink href="#anfrage" className="btn bg-white d-block mx-auto" style={anchor}>Anfrage</AnchorLink>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center my-5">Über uns</h2>
            <p>Jeder Mensch verdient eine vernünftige Zahnbehandlung. Öfter die Preise der Zahnbehandlung insbesondere
              Implantatsanierung in einer Zahnarztpraxis in deutschland erlauben es nicht . Wir sind ein Team das
              zahnärztliche Erfahrung sowie in Serbien als auch in Deutscland gesammelt hat und die Qualität der
              Zahnbehandlung in Serbien mit der deutschen vergleichen darf und kann. Niedrigere kosten für zahnärztliche
              Behandlung bedeuten nicht immer weniger Qualität. Das kann man auch in diesem Fall behaupten. Viele fragen
              sich warum ist im Ausland bzw. Serbien Zahnersatz drastisch billiger als in Deutschland? Es ist einfach zu
              erklären. Lebensstandard, Steuer und Laborkosten sind niedriger, die Qualität, die Verantwortung,
              Fähigkeit und Fachwissen im Gegenteil nicht.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-5">
            <h2 className="text-center my-5">Schritt für Schrit</h2>

            <div className="d-flex">
              <div className="card mx-1 flex-grow-1 bg-light" style={{flexBasis: '20%'}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">1</h4>
                  <p className="card-text">
                    Ihre Anfrage
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1" style={{flexBasis: '20%'}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">2</h4>
                  <p className="card-text">
                    Wir schicken die Anfrage an Zahnarztpraxis in Serbien
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light" style={{flexBasis: '20%'}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">3</h4>
                  <p className="card-text">
                    Sie entscheiden sich für Zahnklinik wo Sie sichbehandeln lassenmöchten
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1" style={{flexBasis: '20%'}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">4</h4>
                  <p className="card-text">
                    Wir bekommen Therapieplan für Sie
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light" style={{flexBasis: '20%'}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">5</h4>
                  <p className="card-text">
                    Wir verbinden Sie mit der Zahnklinik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-5">
            <h2 className="text-center my-5" id="anfrage">Anfrage</h2>
            <form action={"https://getform.io/f/dafa535e-de69-4fcd-ac3d-6f44cd879092"} method="POST"
                  encType="multipart/form-data">
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

              <div className="form-group">
                <div className="custom-file">
                  <input type="file" name="file" className="custom-file-input" id="customFile"/>
                  <label className="custom-file-label" htmlFor="customFile">Ihr Rö Bild ( Panorama Bild-OPG)
                    (Pflichtfeld)</label>
                </div>
              </div>

              <div className="form-group">
                <div className="custom-file">
                  <input type="file" name="fotos" className="custom-file-input" id="customFile"/>
                  <label className="custom-file-label" htmlFor="customFile">Fotos von Ihren Zähnen (optional)</label>
                </div>
              </div>

              <div className="form-group">
                <label>Vorhandene Therapieplan ( falls vorhanden)</label>
                <textarea className="form-control" name="description"/>
              </div>

              <div className="form-group">
                <label>Gewünschte Datum Ihres Therapiebeginns</label>
                <input type="date" className="form-control" name="date"/>
              </div>

              <div className="form-group">
                <label>Möchten Sie einen Kostenvoranschlag für Ihre Aufenthalt im Serbien während der Behandlung ( Falls
                  ja, wie viel Personen sollen wir buchen, liegen besondere wünsche für das Hotel, bitte beschreiben )
                </label>
                <textarea className="form-control" name="custom"/>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" value={this.state.firstCheckbox} className="custom-control-input"
                       id="customCheck1" onClick={e => this.onFirstCheckbox(e)}/>
                <label className="custom-control-label" htmlFor="customCheck1">Ich habe die <Link to={"/terms"}>Datenschutzerklärung</Link> zu Kenntnis genommen.</label>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" value={this.state.secondCheckbox} className="custom-control-input"
                       id="customCheck2" onClick={e => this.onSecondCheckbox(e)}/>
                <label className="custom-control-label" htmlFor="customCheck2">Ich stimme den AGB zu.</label>
              </div>

              <input type="submit" value="Submit" disabled={!this.state.firstCheckbox || !this.state.secondCheckbox}
                     className="btn btn-primary text-white d-block mx-auto"
                     style={{width: 100}}/>
            </form>
          </div>
        </div>
      </div>
    </div>;
  }
}
