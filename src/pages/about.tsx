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
              Serbien ist ein Staat im süd-ost Europas. Sehr warme Sommer und kalte Winter sind für dieses Land
              charakteristisch. Belgrad mit 2 Millionen Bewohner als Hauptstadt liegt an zwei Flüsse, Donau und
              Sava, was ihm wahrscheinlich als beliebteste Stadt zum Leben macht. Sehr lebendige Stadt mit
              verschiedenen Universitäten, Museen, vielen Sehenswürdigkeiten wie Kalemegdan ( ein Festung aus
              Mittelalter), Nikola Tesla Museum, Ada Ciganlija ( Sava See ), Gardos in Zemun und Gaststätten, die
              besonders am Wasser beliebt und besuchswert sind.
              In Belgrad befindet sich Flughafen Nikola Tesla. Dieser Flughafen bietet auch die Flüge der
              kostengünstigeren Unternehmen wie Ryanair und Wizzair die täglich fliegen auf die Strecke
              Deutschland-Serbien. In etwa 200 Km entfernte Stadt Nis, in Süden des Landes, befindet sich auch
              Flughafen die solche Flüge bietet.
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}