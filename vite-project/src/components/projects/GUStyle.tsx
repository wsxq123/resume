import PicOnlyTemp from '@components/projects/PicOnlyTemp';
import GUStylePng from '@assets/projects/guStyle.png';

function GUStyle() {
  const picList = [GUStylePng];

  return <PicOnlyTemp picList={picList} darkBg={true} />;
}

export default GUStyle;
