import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { videos, activeCategory, nextPageToken } = useSelector(
    state => state.homeVideos
  )

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos(nextPageToken))
    } else {
      dispatch(getVideosByCategory(activeCategory, nextPageToken))
    }
  }

  return (
    <Container fluid>
      <div style={{ marginBottom: '1rem' }}>
        <CategoriesBar />
      </div>

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }
        className='row'
      >
        {videos.map((video) => (
          <Col key={video.id} lg={3} md={4} sm={6} xs={12}>
            <Video video={video} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen
