import { GetVideosRes } from '../contracts/response/get-videos.res';
import { VideoModel } from '../models/video.model';

export namespace VideoMapper {

  export const toVideoModel = (data: GetVideosRes): VideoModel => {
    return {
      videoId: data.video_id,
      videoTitle: data.video_title,
      videoPathUrl: data.video_path_url,
      videoDuration: data.video_duration,
      videoType: data.video_type,
      thumbnailPathUrl: data.thumbnail_path_url,
      userName: data.user_name,
      postedAt: data.posted_at
    };
  };
}
