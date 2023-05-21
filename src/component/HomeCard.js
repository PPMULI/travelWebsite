import React from "react";
import flight from "../images/flight.jpg";

function HomeCard() {
  return (
    <div className="row">
      <div className="col-lg-3">
        <img src={flight} className="card-img-top flight" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatum corrupti, quibusdam voluptate cupiditate quos tenetur
              dicta quam fugiat laudantium libero ex iusto eligendi, harum fugit
              provident placeat assumenda dolore.
            </i>
          </p>
        </div>
      </div>

      <div className="col-lg-3">
        <img src={flight} className="card-img-top flight" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quisquam est laborum incidunt iste, fugiat iusto iure earum labore
              numquam cupiditate culpa, quae sed cum perferendis similique modi
              aliquam veniam.
            </i>
          </p>
        </div>
      </div>

      <div className="col-lg-3">
        <img src={flight} className="card-img-top flight" alt="..." />
        <div className="card-body">
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem commodi nesciunt enim omnis quasi, dolore dolores
              iste, aspernatur, odio corrupti amet? Eveniet itaque illo
              repellendus dicta neque assumenda officiis laborum.
            </i>
          </p>
        </div>
      </div>

      <div className="col-lg-3">
        <img src={flight} className="card-img-top flight" alt="..." />

        <div className="card-body">
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos et
              expedita cum dolor! Eum atque magni et ut, nesciunt corporis iusto
              magnam vero dolore soluta explicabo blanditiis nobis officia
              omnis!
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
