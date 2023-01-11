import React from 'react'
import { Card } from 'react-bootstrap';
import "./solution.css";

function solution() {
  return (
    <div class="content">
      <div class="titlePlus">
        NOS SOLUTIONS
      </div>
      <div class="cont">
        <div class="itemCont">
          <h4>Solition 1</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="itemCont">
          <h4>Solition 2</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="itemCont">
          <h4>Solition 3</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="itemCont">
          <h4>Solition 4</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="itemCont">
          <h4>Solition 5</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>

      {/* <>
        {[
          'Primary',
          'Secondary',
          'Success',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-6"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </> */}
    </div>
  )
}

export default solution