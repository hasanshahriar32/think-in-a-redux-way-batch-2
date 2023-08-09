let totalMatch = 1;
let initialValue = 0;
const initialState = {
  match: [
    {
      matchName: `Match 1`,
      value: initialValue,
    },
  ],
};

//create a new match
function createMatch() {
  //retrieve match from local storage
  let match = JSON.parse(localStorage.getItem("match"));

  const matchNumber = document.querySelectorAll(".match").length + 1;

  if (matchNumber > totalMatch) {
    totalMatch = matchNumber;
  } else {
    totalMatch = totalMatch + 1;
  }

  // set initial state
  initialState.match.push({
    matchName: `Match ${totalMatch}`,
    value: initialValue,
  });

  console.log(initialState.match);

  // get current date and time
  // var today = new Date();
  // var date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date + " " + time;

  const matchName = `Match ${totalMatch}`;

  //create a new match
  var newMatch = document.createElement("div");
  // newMatch.classList.add("match");
  newMatch.innerHTML = `
   <div class="match">
          <div class="wrapper">
            <button onClick="(deleteMatch(${totalMatch}))" class="lws-delete deleteBtn${totalMatch}">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">${matchName}</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" onblur="(store.dispatch(increment(${totalMatch})))" name="increment${totalMatch}" class="lws-increment" id="increment${totalMatch}" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" onblur="(store.dispatch(decrement(${totalMatch})))" name="decrement${totalMatch}" class="lws-decrement" id="decrement${totalMatch}" />
            </form>
          </div>
          <div class="numbers">
            <h2 class="lws-singleResult" id="screen${totalMatch}">${initialValue}</h2>
          </div>
        </div>
  
  `;
  document.getElementById("allMatches").appendChild(newMatch);

  //set at local storage
  localStorage.setItem("match", JSON.stringify(match));
}

//reset all matches
function reset() {
  //set initil state VALUE to 0 for all matches
  initialState.match.forEach((match) => {
    match.value = 0;
  });
  // render();
  //render match names
  const match = document.querySelectorAll(".match");
  match.forEach((match, index) => {
    match.querySelector(".lws-singleResult").innerHTML =
      initialState.match[index].value;
  });

  //reset the input field value
  const incrementField = document.getElementsByClassName("lws-increment");
  const decrementField = document.getElementsByClassName("lws-decrement");
  for (let i = 0; i < incrementField.length; i++) {
    incrementField[i].value = 0;
  }
  for (let i = 0; i < decrementField.length; i++) {
    decrementField[i].value = 0;
  }
}

//delete a match from the list
function deleteMatch(e) {
  const match = document.querySelector(`.deleteBtn${e}`).parentElement
    .parentElement;
  match.remove();
  //render match names
}

// select dom elements

const counterEl = document.getElementById("screen1");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// const increment1 = document.getElementById("increment1");
// const decrement1 = document.getElementById("decrement1");

//create dynamic id for increment and decrement and make const

// action creators

const increment = (id) => {
  // console.log(id);
  const value = parseInt(document.getElementById(`increment${id}`).value) || 0;
  initialState.match[id - 1].value = initialState.match[id - 1].value + value;
  // console.log(initialState.match[id - 1].value);
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (id) => {
  const value = parseInt(document.getElementById(`decrement${id}`).value) || 0;
  initialState.match[id - 1].value = initialState.match[id - 1].value - value;
  //if value is less than 0, set value to 0
  if (initialState.match[id - 1].value < 0) {
    initialState.match[id - 1].value = 0;
  }

  return {
    type: DECREMENT,
    payload: value,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

// store

const store = Redux.createStore(reducer);

// render

const render = () => {
  const state = store.getState();
  console.log(store.getState());
  counterEl.innerHTML = state.match[0].value;
  const match = document.querySelectorAll(".match");
  match.forEach((match, index) => {
    match.querySelector(".lws-singleResult").innerHTML =
      state.match[index].value;
  });
};

// subscribe

store.subscribe(render);

// initial render
render();
