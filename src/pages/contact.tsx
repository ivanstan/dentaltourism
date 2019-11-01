import * as React from "react";

export class Contact extends React.Component {
  render() {
    return <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-8 mx-auto">
          <h1>Kontakt</h1>
          <form action={"https://formspree.io/milivoevski@gmail.com"} method="POST">
            <div className="form-group">
              <input type="text" className="form-control" name="email" id="email" required placeholder="E-Mail"/>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" required placeholder="Betreff"/>
            </div>

            <div className="form-group">
              <textarea rows={5} className="form-control" name="message" id="message" required placeholder="Ihre Nachricht"/>
            </div>

            <input className="btn btn-primary" type="submit" value="Anfrage senden" style={{width: '100%', color: '#fff'}}/>
          </form>
        </div>
      </div>
    </div>
  }
}