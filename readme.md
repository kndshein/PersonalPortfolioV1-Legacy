# Project One Overview

## Project Schedule

Scheduling time with the squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day         | Deliverable                        | Status     |
| ----------- | ---------------------------------- | ---------- |
| 12/20 Sun   | Wireframe + Mock Ups + Timeline    | Complete   |
| 12/21 Mon   | Project Approvals                  | Complete   |
| 12/22 Tues  | HTML + CSS                         | Complete   |
| 12/23 Wed   | CSS + MVP                          | Incomplete |
| 12/24 Thurs | MVP                                | Incomplete |
| 12/25 Fri   | <center>--- _Back Up_ ---</center> | Incomplete |
| 12/26 Sat   | MVP                                | Incomplete |
| 12/27 Sun   | Post MVP                           | Incomplete |
| 12/28 Mon   | Post MVP + Bug Fixes               | Incomplete |
| 12/29 Tues  | <center>--- _Back Up_ ---</center> | Incomplete |
| 12/30 Wed   | <center>--- _Back Up_ ---</center> | Incomplete |
| 12/31 Thurs | <center>--- _Back Up_ ---</center> | Incomplete |
| 1/1 Fri     | Post MVP + Bug Fixes               | Incomplete |
| 1/2 Sat     | Post MVP + Bug Fixes               | Incomplete |
| 1/3 Sun     | Final Touches + Recording          | Incomplete |
| 1/4 Mon     | Present                            | Incomplete |

## Project Purpose

To make a user-friendly yet unique portfolio website with the limited knowledge I have acquired over the past couple of weeks.

## Google Sheet

[Google Sheet Link](https://docs.google.com/spreadsheets/d/1ZYlV-gAMjH1KxIEfc24jhPFtLRe3hfE-3TcwIzMoh1o/edit#gid=0)

[Google Sheet Json Link](https://spreadsheets.google.com/feeds/list/1ZYlV-gAMjH1KxIEfc24jhPFtLRe3hfE-3TcwIzMoh1o/1/public/full?alt=json)

## Portfolio I want to Emulate

| Link To Site                                          | One Thing I'd Like To Incorporate       |
| ----------------------------------------------------- | --------------------------------------- |
| [knds.art](https://knds.art/fotos)                    | Layout                                  |
| [danmachado.com](https://www.danmachado.com/)         | Intro page for phone + tablet layout    |
| [moritz-peterson.de](https://www.moritz-petersen.de/) | The way the project cards move on hover |

---

## Wireframes

- [Mobile](https://res.cloudinary.com/kndshein/image/upload/v1608569565/Project%20One/Wireframe__Mobile_dm7trv.png)
- [Tablet](https://res.cloudinary.com/kndshein/image/upload/v1608575846/Project%20One/Wireframe__Tablet_n0cryr.png)
- [Desktop](https://res.cloudinary.com/kndshein/image/upload/v1608529417/Project%20One/Wireframe_Desktop_nty6eu.png)

## Time/Priority Matrix

[Link](https://res.cloudinary.com/kndshein/image/upload/v1608569565/Project%20One/Time_Priority_Matrix_v3g2ge.png)

### MVP/PostMVP

#### MVP

- Pull data using google API
- CSS grid for galleries
- Flexbox for Navigation bar
- Have a form in About Me page

#### PostMVP

- Full page navigation for mobile
- Carousel for Design on mobile
- On hover animation for images
- On hover animation for navigation links on Desktop

## Functional Components

#### MVP

| Component       | Priority | Estimated Time | Actual Time |
| --------------- | :------: | :------------: | :---------: |
| Base HTML       |    H     |      1 hr      |    1 hr     |
| Nav Menu Mobile |    H     |      2 hr      |    3 hrs    |
| Regular Nav     |    H     |      1 hr      |    5 hrs    |
| Create Pages    |    H     |     2 hrs      |   0.5 hr    |
| Adding Form     |    H     |     2 hrs      |    6 hrs    |
| Gallery Grids   |    M     |     3 hrs      |   10 hrs    |
| Total           |          |     11 hrs     |  25.5 hrs   |

#### PostMVP

| Component                  | Priority | Estimated Time | Actual Time |
| -------------------------- | :------: | :------------: | :---------: |
| Nav Menu Hover             |    H     |     2 hrs      | Incomplete  |
| Footer                     |    M     |      1 hr      |    1 hr     |
| Active Nav                 |    M     |     2 hrs      | Incomplete  |
| Social Media Icons         |    M     |      2 hr      | Incomplete  |
| Scroll Wheel for "I Write" |    L     |     4 hrs      | Incomplete  |
| Gallery Hover Animation    |    L     |     2 hrs      |    4 hrs    |
| Fluid Mobile Nav           |    L     |     2 hrs      |   10 hrs    |
| Total                      |          |     15 hrs     |   15 hrs    |

## Issues and Resolutions

```
app.js:78 Uncaught ReferenceError: form is not defined
    at app.js:78
```

I was missing the scriptURL in javascript.

## Citations

[Overlay Mobile Navigation](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp)

[Form to Google Sheets with jQuery](https://dev.to/omerlahav/submit-a-form-to-a-google-spreadsheet-1bia)

[Hamburger Animation](https://www.youtube.com/watch?v=dIyVTjJAkLw)

## Code Snippet

Code snippets of functionality that you are proud of and a brief description.

Form code made from scratch:

```
<div class="aboutFormContainer">
      <h4>The world's burning, let's connect!</h4>
      <div class="aboutForm">
        <form name="submit-to-google-sheet" autocomplete="off">
          <div class="formInside">
            <label for="name">Name</label>
            <input
              id="formName"
              name="Name"
              type="text"
              placeholder="Name here"
              required
            />
          </div>
          <div class="formInside">
            <label for="formEmail">Email</label>
            <input
              id="formEmail"
              name="Email"
              type="email"
              placeholder="Email here"
              required
            />
          </div>
          <div class="formInside">
            <label for="formMessage">Message</label>
            <textarea
              id="formMessage"
              name="Message"
              placeholder="Text body here"
              required
            ></textarea>
          </div>
          <button id="aboutFormButton" type="submit" onclick="this.blur();">
            Submit
          </button>
        </form>
        <div id="formThank" class="formThank">
          <div id="formThankText" class="formThankText">
            Thanks for reaching out! I'll get back to you in a jiffy.
          </div>
        </div>
      </div>
      <!-- Script for form -->
      <script>
        const scriptURL =
          "URL";
        const form = document.forms["submit-to-google-sheet"];

        form.addEventListener("submit", (e) => {
          e.preventDefault();
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => console.log("Success!", response))
            .catch((error) => console.error("Error!", error.message));
        });

        $("#aboutFormButton").click(function () {
          if (
            $("#formName")[0].checkValidity() &&
            $("#formEmail")[0].checkValidity() &&
            $("#formMessage")[0].checkValidity()
          ) {
            $("#formThank").removeClass("formThank");
            $("#formThank").addClass("formThankWhenClicked");
            $("#formThankText").removeClass("formThankText");
            $("#formThankText").addClass("formThankTextWhenClicked");
          }
        });
      </script>
    </div>
}
```

Hamburger menu animation from scratch:

```
.menuButton {
  z-index: 11;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 750ms ease-in-out;
}

.menuButtonBurger {
  width: 20px;
  height: 4px;
  background: black;
  border-radius: 2px;
  transition: all 750ms ease-in-out;
}

.menuButtonBurger::before,
.menuButtonBurger::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 4px;
  background: black;
  border-radius: 2px;
  transition: all 750ms ease-in-out;
}

.menuButtonBurger::before {
  transform: translateY(-7px);
}

.menuButtonBurger::after {
  transform: translateY(7px);
}

.menuButton.open .menuButtonBurger {
  transform: translateX(10px);
  background: transparent;
}

.menuButton.open .menuButtonBurger::before {
  transform: rotate(45deg) translate(-9px, 9px);
  width: 20px;
}

.menuButton.open .menuButtonBurger::after {
  transform: rotate(-45deg) translate(-9px, -9px);
  width: 20px;
}
```
