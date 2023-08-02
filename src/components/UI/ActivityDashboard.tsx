import { Container, Grid } from '@mui/material'
import ActivityList from './ActivityList';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { Fragment, useEffect, useState } from 'react';
import ActivityFilters from './ActivityFilters';
import { PagingParams } from '../../models/pagination';
import { Button } from 'semantic-ui-react';
// import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from './ActivityListItemPlaceholder';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry,setPagingParams,pagination} = activityStore
    const [loadingNext,setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1))
        loadActivities().then(() => setLoadingNext(false));
    }

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])
  

    return (
        <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={7}>
              {activityStore.loadingInitial && !loadingNext ? (
                <>
                  <ActivityListItemPlaceholder/>
                  <ActivityListItemPlaceholder/>
                </>
              ): ( 
              //   <InfiniteScroll
              //   pageStart={0}
              //   loadMore={handleGetNext}
              //   hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
              //   initialLoad={false}
              // >
                  <Fragment>
                    <ActivityList/>
                    <Button 
                    floated='right'
                    content='More...'
                    positive
                    onClick={handleGetNext}
                    loading={loadingNext}
                    disabled={pagination?.totalPages === pagination?.currentPage} />
                  </Fragment>
              // </InfiniteScroll>
              )}
            </Grid>
            <Grid item xs={5}>
              <ActivityFilters/>
            </Grid>
            {/* <Grid item xs={12}>
                <Loader active={loadingNext} />
            </Grid> */}
        </Grid>
       </Container>
    </div>
    )
})
