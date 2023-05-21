import React from 'react'

function AboutCard(props) {
  return (
    <>
            <div class="card">
              <img src={props.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title aboutcard">{props.title}</h5>
                <p class="card-text aboutcardtext">{props.desc}
                </p>
              </div>
            </div>
    </>
  )
}

export default AboutCard