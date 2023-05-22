import React from "react";
import { useRouter } from "next/router";
import { RecoilStates } from "../../state/state";
import { useRecoilValue } from "recoil";
const club = () => {
  const { selectedClubState } = RecoilStates;
  const selectedClub = useRecoilValue(selectedClubState);
  const router = useRouter();
  return <div>{selectedClub}</div>;
};

export default club;
