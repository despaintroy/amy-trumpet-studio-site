import {FC} from "react";
import {Fonts} from "@/fonts";
import {YouTubeEmbed} from "@next/third-parties/google";

const VideoSection: FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Fonts.headings.className}>Videos</h2>

        <YouTubeEmbed
          videoid="vgohPCWxwCI"
          params="start=1777"
          playlabel="Amy DeSpain | USU Concerto Competition"
          style="background-image: url('img/concerto-poster.jpg');"
        />
      </div>
    </section>
  )
}

export default VideoSection;
