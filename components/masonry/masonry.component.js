'use client'
import Masonry from 'react-masonry-css'

const MasonryWrap = ({ children  }) => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        900: 2,
        500: 1
      };

  return (

        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
            {children}
        </Masonry>

  );
};

export default MasonryWrap;
