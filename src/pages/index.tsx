import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MainContent from '@site/src/components/MainContent';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Shravan's Blog`}
      description="Welcome to Shravan's personal blog! Here, I share thoughts, insights, and musings on a variety of topics that spark my curiosity and might intrigue you too. Dive in and explore the ideas and reflections that cross my mind.">
      <main>
        <MainContent />
      </main>
    </Layout>
  );
}
