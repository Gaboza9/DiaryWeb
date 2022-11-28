import ReviewContents from "../components/ReviewContents";

function MovieReviewPage() {
  return (
    <>
     <h1 class="text-center mt-4" style={{fontFamily:'puradak'}}>영화 리뷰 페이지</h1>
      <ReviewContents type="배우"/>
    </>
  );
}

export default MovieReviewPage;