import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MainContent from '@site/src/components/MainContent';
import Layout from '@theme/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Shravan's Blog`}
      description="Welcome to Shravan's personal blog! Here, I share thoughts, insights, and musings on a variety of topics that spark my curiosity and might intrigue you too. Dive in and explore the ideas and reflections that cross my mind.">
       <Head>
       {/* Change below to your google site verification tag */}
       <meta name="google-site-verification" content="-SjjEXMpMrV5jwbJZ4CQ87r3Bw2Nifie5-SCqISSyiM" />
      </Head>
      <main>
        <MainContent />
        <SpeedInsights />
        <Analytics />
      </main>
    </Layout>
  );
}
