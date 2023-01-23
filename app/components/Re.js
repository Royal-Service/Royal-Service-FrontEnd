import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Stars.css";
import { useAuth } from "../contexts/Auth";
function Review({ id }) {
  const { userInfo, tokens, custmerID } = useAuth();
  const [allReview, setAllReview] = useState();
  const [formFlag, setFormFlag]=useState()
  const [formData, setFormData] = useState({
    subject: userInfo,
    review: "",
    rating: "",
    craftsman: id,
    ip: "ismael",
    status: true,
  });
  const [noReview, setNoREview] = useState(false);
  let reviewURL = "http://127.0.0.1:8000/review/craftsman/";
  const filterReview = (arr) => {
    let reviews = arr[2].reviews;
    // let Reviews = reviews.map((item) => item.review);
    const filteredData = reviews.filter(
        (review) => review.custmer === custmerID
      );
      const flag = Boolean(filteredData.length); 
      setFormFlag(flag)
    setAllReview(reviews);
    return reviews;
  };
  useEffect(() => {
    (async () => {
      try {
        const rate = await axios.get(reviewURL + id + "/");
        console.log(rate);
        filterReview(rate.data);
      } catch {
        setNoREview(true);
      }
    })();
  }, []);
  console.log(id);

  const createReview = "http://127.0.0.1:8000/review/create/";
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
    });

    fetch(createReview, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("done");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("error");
      });
  };
  console.log(allReview);

  return (
    <div>
      {allReview &&
        allReview.map((item) => {
          // subject = name
          return (
            <div>
              <h3>{item.subject}</h3>
              <h3>{item.review}</h3>
              <h3>{item.rating}</h3>
            </div>
          );
        })}
      <div>
        {!formFlag && (
          <>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Add Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <div class="rating">
                  <input
                    type="radio"
                    name="rating"
                    id="rating-5"
                    onClick={() => setFormData({ ...formData, rating: 5 })}
                  />
                  <label for="rating-5"></label>
                  <input
                    type="radio"
                    name="rating"
                    id="rating-4"
                    onClick={() => setFormData({ ...formData, rating: 4 })}
                  />
                  <label for="rating-4"></label>
                  <input
                    type="radio"
                    name="rating"
                    id="rating-3"
                    onClick={() => setFormData({ ...formData, rating: 3 })}
                  />
                  <label for="rating-3"></label>
                  <input
                    type="radio"
                    name="rating"
                    id="rating-2"
                    onClick={() => setFormData({ ...formData, rating: 2 })}
                  />
                  <label for="rating-2"></label>
                  <input
                    type="radio"
                    name="rating"
                    id="rating-1"
                    onClick={() => setFormData({ ...formData, rating: 1 })}
                  />
                  <label for="rating-1"></label>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="datepicker"></Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}

export default Review;
