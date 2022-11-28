import ReviewContents from '../components/RePage/ReviewContents';
import { useState } from 'react';

function MovieReviewPage() {
  const [tab , setDealTab]=useState("curr")
  return (
    <>
      <ReviewContents/>
    </>
  );
}

export default MovieReviewPage;