//default: https://media.rawg.io/media/crop/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
//smaller: https://api.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
