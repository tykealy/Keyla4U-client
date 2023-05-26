import React from "react";
import BookingTable from "../../components/parent/BookingTable";
import { RecoilStates } from "../../state/state";
const club = ({ club, pitcheCategories }) => {
  // const { selectedPageState, selectedSportState } = RecoilStates;
  const selectClub = club.id;
  const [selectedClub, setSelectedClub] = React.useState(selectClub);
  return (
    <div>
      <BookingTable
        clubCategoryID={pitcheCategories}
        club={club}
        selectedClub={selectedClub}
      ></BookingTable>
    </div>
  );
};

export default club;

export async function getServerSideProps(context) {
  const selectedClub = context.query.id;

  const req = await fetch(`http://localhost:8000/api/clubs/${selectedClub}`);
  const res = await req.json();
  const pitchCategoryID = res.categories.map((category) => {
    return category.id;
  });
  return {
    props: {
      club: res,
      pitcheCategories: pitchCategoryID,
    },
  };
}
