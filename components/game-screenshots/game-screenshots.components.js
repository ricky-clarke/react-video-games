import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Image from "next/image";

const GameScreenshots = () => {

    const router = useRouter();
    const [image, GetGameImages] = useState([]);

useEffect(() => {
  if(router.isReady){
    const slug = router.query.slug;
    async function fetchData() {
      const result = await fetch(`/api/game/screenshots/${slug}`)
      const img = await result.json();
      GetGameImages(img);
    }
      fetchData();
  }
}, [router.isReady]);

    return ( 
        <>
            <div>
                    {image.items && image.items?.results.map((img, i) => {
                        return( 
                            <Image src={img.image} key={i} alt="" width="1000" height="500"/>
                        )
                    })
                    }
            </div>
        </>
     );
}
 
export default GameScreenshots;