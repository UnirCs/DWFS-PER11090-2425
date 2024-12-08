import { SeatsGrid } from "../../components/SeatsGrid/SeatsGrid.js";
import { LabelRowList } from "../../components/LabelRowLIst/LabelRowLIst.js";
import { butacas, suggest } from "../../services/butacas.js";

const sitNum = document.getElementById("sit-num");
let previousSelectedSeats = [];

const renderSeats = ({ butacas = [] } = {}) => {
  const seatsContainer = document.getElementById("butacas_container");
  // console.log(SeatsGrid({ butacas, butacasSelected }))
  seatsContainer.innerHTML = SeatsGrid({ butacas });
};

const renderLabels = ({ labels = [] } = {}) => {
  const labelsContainer = document.getElementById("filas_container");
  labelsContainer.innerHTML = LabelRowList({ labels });
}

renderSeats({ butacas });
renderLabels({ labels: butacas });

const updateSelectedSeats = ({ butacasSelected }) => {
  butacasSelected.forEach(id => {
    const seat = document.getElementById(id);
    const hasSelected = seat.classList.contains("selected");
    if (hasSelected) {
      
    } else {
      seat.classList.add("selected");
    }
  });
  previousSelectedSeats.forEach(id => {
    const seat = document.getElementById(id);
    const isSelected = butacasSelected.includes(id);
    if (!isSelected) {
      seat.classList.remove("selected");
    }
  });

  previousSelectedSeats = butacasSelected;
}

sitNum.addEventListener("input", function(e) {
  const numSeats = parseInt(e.target.value);
  const seats = suggest(numSeats);
  updateSelectedSeats({ butacasSelected: Array.from(seats) });
});