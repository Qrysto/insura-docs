import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tóm tắt hợp đồng nhanh chóng',
    image: require('@site/static/img/document.png').default,
    description: (
      <>
        Tổng hợp tất cả hợp đồng của khách hàng vào một báo cáo ngắn gọn, kèm những thống kê trực quan, hữu ích về quyền lợi và phí đóng.
      </>
    ),
  },
  {
    title: 'Nhắc đóng phí',
    image: require('@site/static/img/calendar.png').default,
    description: (
      <>
        Không còn nỗi lo hợp đồng mất hiệu lực với quy trình nhiều bước giúp hợp đồng được nhắc phí hiệu quả, giữ trọn lời hứa với khách hàng.
      </>
    ),
  },
  {
    title: 'Nhắc sinh nhật',
    image: require('@site/static/img/present.png').default,
    description: (
      <>
        Trở thành người tận tâm và chu đáo với công cụ ghi nhớ sinh nhật của không chỉ khách hàng mà còn cả những người thân của họ.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} style={{ width: '160px', height: 'auto', marginBottom: '2rem', marginTop: '2rem' }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
