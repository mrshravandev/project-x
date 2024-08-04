import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import clsx from 'clsx';

const MainContent = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx(styles.container)}>
      <Link className={styles.profilepic} to='/posts'>
        <img src='/img/profile-pic.jpeg' />
      </Link>
      <Heading as="h1" className={styles.title}>
        {siteConfig.title}
      </Heading>
      <p className={styles.tagline}>{siteConfig.tagline}</p>
      <div className={styles.location}>
        {siteConfig.customFields.location as string}
      </div>
    </section>
  );
}

export default MainContent;