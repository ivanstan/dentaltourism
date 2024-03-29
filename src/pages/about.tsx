import * as React from "react";
import {Carousel} from "react-responsive-carousel";

export class About extends React.Component {
  render() {
    return <div className="mb-5">
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} stopOnHover={false}>
        <div>
          <img src="/images/NEX_2378-Pano.JPG" width="23%"/>
        </div>
        <div>
          <img src="/images/NEX_2396-Pano.JPG" width="23%"/>
        </div>
        <div>
          <img src="/images/NEX_2481-Pano.JPG" width="23%"/>
        </div>
      </Carousel>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="mt-5">Über Serbien</h1>
            <p>
              Serbien ist ein Staat in Südosteuropa. Sehr warme Sommer und kalte Winter sind für dieses Land
              charakteristisch. Belgrad als Hauptstadt mit über 2 Millionen Einwohnern, liegt an zwei Flüssen, Donau und
              Sava. Dies macht die Stadt höchstwahrscheinlich sehr beliebt, um in ihr zu wohnen. Belgrad ist eine sehr lebendige Stadt mit
              verschiedenen Universitäten, Museen und vielen Sehenswürdigkeiten. Einige davon sind der Kalemegdan, eine Festung aus dem
              Mittelalter, das Nikola Tesla Museum, die Ada Ciganlija, der Sava See usw.. Desweiteren gibt es sehr gut geführte Gaststätten, die
              besonders am Wasser in Form von schwimmenden Booten beliebt und besuchenswert sind.
              In Belgrad befindet sich der Flughafen Nikola Tesla. Dieser wird täglich von den
              kostengünstigeren Unternehmen wie Ryan- und Wizzair von Deutschland aus angeflogen.
              Dasselbe gilt für die 200 Km entfernte Stadt Niš und deren Flughafen.
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}
