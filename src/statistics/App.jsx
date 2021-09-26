import StatisticsList from './components/StatisticsList';
import Section from './components/Section';

import stats from './statistical-data.json';

export default function App() {
  return (
    <div>
      <Section title="Upload stats">
        <StatisticsList stats={stats} />
      </Section>
    </div>
  );
}
