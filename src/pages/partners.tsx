import * as React from "react";
import {Carousel} from "react-responsive-carousel";

const video = {
  margin: 'auto',
  width: '100%',
  display: 'block',
  marginTop: 50,
};

export class Partners extends React.Component {
  render() {
    return <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center my-5">Zahnarztpraxis, Savski Venac</h1>
          <div className="savski-venac-carousel">
          <Carousel infiniteLoop={false} autoPlay={true} showThumbs={true} showStatus={true} stopOnHover={false}>
            <div>
              <img src="/images/ALN_1621.jpg" width="23%"/>
            </div>
            <div>
              <img src="/images/ALN_1769.jpg" width="23%"/>
            </div>
            <div>
              <img src="/images/ALN_1787.jpg" width="23%"/>
            </div>
            <div>
              <img src="/images/ALN_1882.jpg" width="23%"/>
            </div>
          </Carousel>
          </div>
          <div className="embed-responsive embed-responsive-4by3">
            <iframe style={video}
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/8UjsL7s99Xg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>;
  }
}