import * as React from "react";

const video = {
  margin: 'auto',
  width: 560,
  display: 'block',
};

export class Partners extends React.Component {
  render() {
    return <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center mb-5">Zahnartzpraxen</h1>
          <iframe style={video} width="560" height="315" src="https://www.youtube.com/embed/8UjsL7s99Xg" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>
      </div>
    </div>;
  }
}