import PicOnlyTemp from '@components/projects/PicOnlyTemp';
import UTalkPng01 from '@assets/projects/uTalk-1.png';
import UTalkPng02 from '@assets/projects/uTalk-2.png';

function Guanggu() {
  const picList = [UTalkPng01, UTalkPng02];

  return <PicOnlyTemp picList={picList} darkBg={false} />;
}

export default Guanggu;
