import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from "react-router-dom";

const anchor = {
  marginTop: 30,
  width: 100,
};

const title: any = {
  paddingTop: 120,
  fontWeight: 'bolder',
  padding: 10,
  background: '#5FC8D7',
  display: 'block',
  margin: 'auto',
  width: '30vw'
};

const card = {
  background: 'linear-gradient(135deg, #0FF0B3 0%,#5fc8d7 100%)',
  border: 'none',
};

export class Home extends React.Component<any, any> {
  private file1: any;
  private file2: any;

  constructor(props: any) {
    super(props);

    this.file1 = React.createRef();
    this.file2 = React.createRef();

    this.state = {
      firstCheckbox: false,
      secondCheckbox: false,
      file1label: "",
      file2label: "",
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

  onFileChange(field: any, event: any) {
    let self: any = this;
    let fileList = self[field].current.files;
    let name = "";

    if (fileList.length > 0) {
      name = fileList[0].name;
    }

    if (field === 'file1') {
      this.setState({
        file1label: name,
      });
    }

    if (field === 'file2') {
      this.setState({
        file2label: name,
      });
    }
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
        <div className="featured">
          <h1 className="text-white text-center" style={title}>Balkan Dental Tourism</h1>
          <AnchorLink href="#anfrage" className="btn bg-white d-block mx-auto" style={anchor}>Anfrage</AnchorLink>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center my-5">Über uns</h2>
            <p>
              Jeder Mensch verdient eine vernünftige Zahnbehandlung. Immer öfter passiert es, dass die Preise der
              Zahnbehandlung, insbesondere das Setzen von Implantaten in einer Zahnarztpraxis in Deutschland, dies
              nicht erlauben . Wir sind ein professionelles Team aus Zahnärzten, welches Erfahrungen sowohl in
              Serbien als auch in Deutschland gesammelt hat und können somit behaupten, dass die Qualität und der
              Standard der Zahnbehandlung beider Länder absolut vergleichbar ist. Niedrigere Kosten für
              zahnärztliche Behandlungen bedeuten nicht immer mindere Qualität. Das können wir mit Fug und Recht
              behaupten. Viele fragen sich, warum Zahnersatz im Ausland, in unserem Fall in Serbien, drastisch
              günstiger ist, als in Deutschland? Dies ist einfach zu erklären. Der Lebensstandard ist günstiger,
              Steuerabgaben und Laborkosten deutlich niedriger, hingegen die Behandlungsqualität, Fachwissen und
              Fachkompetenz, zusammen mit einem hohen Verantwortungsgefühl, sehr hoch.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-5">
            <h2 className="text-center my-5">Schritt für Schritt</h2>

            <div className="cards">
              <div className="card mx-1 flex-grow-1" style={{...card}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">1</h4>
                  <p className="card-text">
                    Ihre Anfrage
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light border-0">
                <div className="card-body text-center">
                  <h4 className="card-title h1">2</h4>
                  <p className="card-text">
                    Wir schicken Ihre Anfrage an mehreren Zahnarztpraxen in Serbien
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light" style={{...card}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">3</h4>
                  <p className="card-text">
                    Wir bekommen Therapipläne und Kostenvoranschläge für Sie
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light border-0">
                <div className="card-body text-center">
                  <h4 className="card-title h1">4</h4>
                  <p className="card-text">
                   Sie entscheiden sich für eine Zahnklinik Ihrer Wahl, wo Sie sich behandeln lassen möchten
                  </p>
                </div>
              </div>
              <div className="card mx-1 flex-grow-1 bg-light" style={{...card}}>
                <div className="card-body text-center">
                  <h4 className="card-title h1">5</h4>
                  <p className="card-text">
                    Wir sorgen für die Verbindung mit der Zahnklinik
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
                <input type="text" className="form-control" name="first_name" required={true}/>
              </div>

              <div className="form-group">
                <label>Name ( Pflichtfeld)</label>
                <input type="text" className="form-control" name="last_name" required={true}/>
              </div>

              <div className="form-group">
                <label>E-Mail Adresse ( Pflichtfeld)</label>
                <input type="email" className="form-control" name="email" required={true}/>
              </div>

              <div className="form-group">
                <label>Geburtsdatum</label>
                <input type="date" className="form-control" name="date_of_birth"/>
              </div>

              <div className="form-group">
                <label>Handynummer (optional)</label>
                <input type="text" className="form-control" name="phone"/>
              </div>

              <div className="form-group">
                <label>Beschreiben Sie Ihr Zahnproblem (Pflichtfeld)</label>
                <textarea className="form-control" name="description" required={true}/>
              </div>

              <div className="form-group">
                <label>Ihr Rö Bild ( Panorama Bild-OPG) (Pflichtfeld)</label>
                <div className="custom-file">
                  <input type="file" onChange={(e) => this.onFileChange("file1", e)} ref={this.file1} name="file"
                         className="custom-file-input" id="customFile1" required={true}/>
                  <label className="custom-file-label" htmlFor="customFile2">{this.state.file1label}</label>
                </div>
              </div>

              <div className="form-group">
                <label>Vorhandener Therapieplan und Fotos von Ihren Zähnen, falls vorhanden (optional)</label>
                <div className="custom-file">
                  <input type="file" onChange={(e) => this.onFileChange("file2", e)} ref={this.file2} multiple={true}
                         name="fotos" className="custom-file-input" id="customFile2"/>
                  <label className="custom-file-label" htmlFor="customFile2">{this.state.file2label}</label>
                </div>
              </div>

              <div className="form-group">
                <label>Gewünschtes Datum Ihres Therapiebeginns</label>
                <input type="date" className="form-control" name="date"/>
              </div>

              <div className="form-group">
                <label>Wünschen Sie einen Kostenvoranschlag für Ihren Aufenthalt in Serbien während Ihrer
                  Behandlung? (Falls ja, wieviel Personen sollen wir buchen? Liegen besondere Wünsche vor, z.B.
                  für das Hotel, bitte beschreiben).
                </label>
                <textarea className="form-control" name="custom"/>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" value={this.state.firstCheckbox} className="custom-control-input"
                       id="customCheck1" onClick={e => this.onFirstCheckbox(e)}/>
                <label className="custom-control-label font-weight-bold" htmlFor="customCheck1">Ich habe die <Link
                  to={"/terms"}>Datenschutzerklärung</Link> zur Kenntnis genommen.</label>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" value={this.state.secondCheckbox} className="custom-control-input"
                       id="customCheck2" onClick={e => this.onSecondCheckbox(e)}/>
                <label className="custom-control-label font-weight-bold" htmlFor="customCheck2">Ich stimme den AGB´s
                  zu.</label>
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
