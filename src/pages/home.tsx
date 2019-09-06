import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export class Home extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">

          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <ScrollAnimation animateIn="fadeIn" duration={1}>

            </ScrollAnimation>
          </div>
          <div className="col-lg-6 mb-5">
            <ScrollAnimation animateIn="fadeIn" duration={1}>

            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>;
  }
}
