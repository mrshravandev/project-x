import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import clsx from 'clsx';

const MainContent = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx(styles.container)}>
      <Link className={styles.profilepic} to='/about'>
        <img src='/img/profile-pic.jpeg' />
      </Link>
      <Heading as="h1" className={styles.title}>
        {siteConfig.title}
      </Heading>
      <p className={styles.tagline}>{siteConfig.tagline}</p>
      <div className={styles.location}>
        {siteConfig.customFields.location as string}
      </div>
      <div className={styles.viewblogposts}>
      <Link className={styles.profilepic} to='/posts'>✨View My Blog Posts✨</Link>
      </div>
    </section>
  );
}

export default MainContent;