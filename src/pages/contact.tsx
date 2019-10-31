import * as React from "react";

export class Contact extends React.Component {
  render() {
    return <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-12">
          <h1>Kontakt</h1>
          <form action={"https://formspree.io/milivoevski@gmail.com"} method="POST">
            <div className="form-group">
              <input type="text" className="form-control" name="email" id="email" required placeholder="Email"/>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" required placeholder="Subject"/>
            </div>

            <div className="form-group">
              <textarea rows={5} className="form-control" name="message" id="message" required placeholder="Message"/>
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" style={{width: '100%', color: '#fff'}}/>
          </form>
        </div>
      </div>
    </div>
  }
}