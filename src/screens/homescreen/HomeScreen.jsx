import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";

function HomeScreen() {
  const dispatch = useDispatch();

  const { videos, activeCategory } = useSelector(state => state.homeVideos);

  useEffect(() => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  }, [dispatch, activeCategory]);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id?.videoId || video.id}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
