import PicOnlyTemp from '@components/projects/PicOnlyTemp';
import GUStylePng from '@assets/projects/guStyle.jpg';

function GUStyle() {
  const picList = [GUStylePng];

  return <PicOnlyTemp picList={picList} darkBg={true} />;
}

export default GUStyle;
